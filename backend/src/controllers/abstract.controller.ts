import { NextFunction, Request, Response } from 'express';
import { db } from '../db/index.js';
import { abstracts } from '../db/schema.js';

// Submit Abstract
export async function submitAbstract(req: Request, res: Response, next: NextFunction) {
  try {
    const { teamId, title, description } = req.body;

    if (!teamId || !title || !description) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    const [newAbstract] = await db.insert(abstracts).values({
      teamId,
      title,
      description,
    }).returning();

    res.status(201).json({
      success: true,
      data: newAbstract,
    });
  } catch (err) {
    next(err);
  }
}

// Admin Fetch
export async function getAllAbstracts(_req: any, res: Response, next: NextFunction) {
  try {
    const data = await db.select().from(abstracts);

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
}