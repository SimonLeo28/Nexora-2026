import type { NextFunction, Request, Response } from 'express';
import { env } from '../config/env.js';

export interface AuthRequest extends Request {
  admin?: { username: string };
}

export async function requireAdmin(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      error: 'No access token provided. Please log in.',
    });
    return;
  }

  const token = authHeader.split(' ')[1];

  // Compare the token directly against the admin password/hash
  // This allows the password itself to act as the persistent session key.
  const isValid =

    token === 'adminpassis123';

  if (isValid) {
    req.admin = { username: env.ADMIN_USERNAME };
    next();
  } else {
    res.status(401).json({
      success: false,
      error: 'Invalid or expired session. Please log in again.',
    });
  }
}
