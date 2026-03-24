import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { db } from '../db/index.js';
import { teams, teamLeaders, teamMembers, payments } from '../db/schema.js';
import { createError } from '../middleware/errorHandler.js';

// ─── Validation Schema ────────────────────────────────────────────────────────

const memberSchema = z.object({
  name: z.string().min(2, 'Member name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
});

const registrationSchema = z.object({
  teamName: z.string().min(2, 'Team name required').max(100),
  leaderName: z.string().min(2, 'Leader name required').max(100),
  email: z.string().email('Valid email required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  collegeName: z.string().min(2, 'College name required').max(200),
  departmentYear: z.string().min(2, 'Department/Year required').max(100),
  theme: z.string().optional().default('not_selected'),
  members: z
    .array(memberSchema)
    .min(1, 'At least 1 team member required (excluding leader)')
    .max(3, 'Maximum 3 team members allowed (excluding leader)'),
});

// ─── Controller ───────────────────────────────────────────────────────────────

export async function registerTeam(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // 1. Validate request body
    const parsed = registrationSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const { teamName, leaderName, email, phone, collegeName, departmentYear, theme, members } =
      parsed.data;

    // 2. Check for duplicate leader email
    const existingLeader = await db.query.teamLeaders.findFirst({
      where: (tl: any, { eq }: any) => eq(tl.email, email),
    });

    if (existingLeader) {
      res.status(409).json({
        success: false,
        error: 'A team with this leader email already exists.',
      });
      return;
    }

    // 3. Parse department & year from combined field (e.g., "CSE / 2nd Year")
    const [department, year] = departmentYear.split('/').map((s) => s.trim());

    // 4. Insert team
    const [newTeam] = await db
      .insert(teams)
      .values({
        teamName,
        collegeName,
        theme,
        status: 'registered',
        paymentStatus: 'pending',
      })
      .returning();

    // 5. Insert team leader
    await db.insert(teamLeaders).values({
      teamId: newTeam.id,
      name: leaderName,
      email,
      phone,
      department: department ?? departmentYear,
      year: year ?? 'N/A',
    });

    // 6. Insert team members
    if (members.length > 0) {
      await db.insert(teamMembers).values(
        members.map((m) => ({
          teamId: newTeam.id,
          name: m.name,
          phone: m.phone,
        }))
      );
    }

    // 7. Create initial payment record
    await db.insert(payments).values({
      teamId: newTeam.id,
      amount: 0, // Admin will update once payment is verified
      status: 'pending',
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful! Please complete your payment to confirm your spot.',
      data: {
        teamId: newTeam.id,
        teamName: newTeam.teamName,
      },
    });
  } catch (err) {
    next(err);
  }
}
