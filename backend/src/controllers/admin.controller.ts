import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { eq, count, sql } from 'drizzle-orm';
import { db } from '../db/index.js';
import { teams, teamLeaders, teamMembers, payments } from '../db/schema.js';
import { env } from '../config/env.js';
import type { AuthRequest } from '../middleware/auth.js';

// ─── Admin Login ──────────────────────────────────────────────────────────────

export async function adminLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { username, password } = req.body as { username: string; password: string };

    if (!username || !password) {
      res.status(400).json({ success: false, error: 'Username and password are required.' });
      return;
    }

    if (username !== env.ADMIN_USERNAME) {
      res.status(401).json({ success: false, error: 'Invalid credentials.' });
      return;
    }

    const passwordValid = await bcrypt.compare(password, env.ADMIN_PASSWORD_HASH);
    if (!passwordValid) {
      res.status(401).json({ success: false, error: 'Invalid credentials.' });
      return;
    }

    const token = jwt.sign(
      { username, role: 'admin' },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN as any }
    );

    res.json({
      success: true,
      token,
      expiresIn: env.JWT_EXPIRES_IN,
      admin: { username },
    });
  } catch (err) {
    next(err);
  }
}

// ─── Dashboard Stats ──────────────────────────────────────────────────────────

export async function getStats(_req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const [totalTeams] = await db.select({ count: count() }).from(teams);
    const [paidTeams] = await db
      .select({ count: count() })
      .from(teams)
      .where(eq(teams.paymentStatus, 'paid'));
    const [pendingTeams] = await db
      .select({ count: count() })
      .from(teams)
      .where(eq(teams.paymentStatus, 'pending'));

    const [revenueResult] = await db
      .select({ total: sql<number>`coalesce(sum(${payments.amount}), 0)` })
      .from(payments)
      .where(eq(payments.status, 'paid'));

    const [totalMembers] = await db.select({ count: count() }).from(teamMembers);

    res.json({
      success: true,
      data: {
        totalTeams: totalTeams.count,
        paidTeams: paidTeams.count,
        pendingTeams: pendingTeams.count,
        totalRevenue: revenueResult.total ?? 0, // in paise — divide by 100 for ₹
        totalParticipants: Number(totalTeams.count) + Number(totalMembers.count),
      },
    });
  } catch (err) {
    next(err);
  }
}

// ─── Get All Teams ────────────────────────────────────────────────────────────

export async function getAllTeams(_req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const allTeams = await db
      .select({
        id: teams.id,
        teamName: teams.teamName,
        collegeName: teams.collegeName,
        theme: teams.theme,
        status: teams.status,
        paymentStatus: teams.paymentStatus,
        createdAt: teams.createdAt,
        leaderName: teamLeaders.name,
        leaderEmail: teamLeaders.email,
        leaderPhone: teamLeaders.phone,
        department: teamLeaders.department,
        year: teamLeaders.year,
      })
      .from(teams)
      .leftJoin(teamLeaders, eq(teams.id, teamLeaders.teamId))
      .orderBy(sql`${teams.createdAt} desc`);

    res.json({
      success: true,
      count: allTeams.length,
      data: allTeams,
    });
  } catch (err) {
    next(err);
  }
}

// ─── Get All Payments ─────────────────────────────────────────────────────────

export async function getAllPayments(_req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const allPayments = await db
      .select({
        id: payments.id,
        teamId: payments.teamId,
        teamName: teams.teamName,
        amount: payments.amount,
        transactionId: payments.transactionId,
        status: payments.status,
        paymentMethod: payments.paymentMethod,
        notes: payments.notes,
        paidAt: payments.paidAt,
        createdAt: payments.createdAt,
      })
      .from(payments)
      .leftJoin(teams, eq(payments.teamId, teams.id))
      .orderBy(sql`${payments.createdAt} desc`);

    res.json({
      success: true,
      count: allPayments.length,
      data: allPayments,
    });
  } catch (err) {
    next(err);
  }
}

// ─── Update Payment Status (Admin action) ─────────────────────────────────────

export async function updatePaymentStatus(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const teamIdStr = req.params.teamId as string;
    const teamId = parseInt(teamIdStr, 10);
    const { status, transactionId, amount, notes, paymentMethod } = req.body as {
      status: 'paid' | 'failed' | 'pending' | 'refunded';
      transactionId?: string;
      amount?: number;
      notes?: string;
      paymentMethod?: string;
    };

    if (!teamId || !status) {
      res.status(400).json({ success: false, error: 'teamId and status are required.' });
      return;
    }

    // Update payment record
    await db
      .update(payments)
      .set({
        status,
        ...(transactionId && { transactionId }),
        ...(amount && { amount }),
        ...(notes && { notes }),
        ...(paymentMethod && { paymentMethod }),
        ...(status === 'paid' && { paidAt: new Date() }),
      })
      .where(eq(payments.teamId, teamId));

    // Sync team payment status
    await db
      .update(teams)
      .set({ paymentStatus: status, updatedAt: new Date() })
      .where(eq(teams.id, teamId));

    res.json({ success: true, message: `Payment status updated to "${status}".` });
  } catch (err) {
    next(err);
  }
}
