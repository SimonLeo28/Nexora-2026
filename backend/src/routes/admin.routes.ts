import { Router } from 'express';
import {
  adminLogin,
  getAllPayments,
  getAllTeams,
  getStats,
  updatePaymentStatus,
} from '../controllers/admin.controller.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();

// POST /api/admin/login — public, no auth required
router.post('/login', adminLogin);

// All routes below require a valid admin JWT
router.get('/stats', requireAdmin, getStats);
router.get('/teams', requireAdmin, getAllTeams);
router.get('/payments', requireAdmin, getAllPayments);
router.patch('/payments/:teamId', requireAdmin, updatePaymentStatus);

export default router;