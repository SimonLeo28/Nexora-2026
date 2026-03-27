import { Router } from 'express';
import { getAllAbstracts, submitAbstract } from '../controllers/abstract.controller.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();

// Public submission
router.post('/', submitAbstract);

// Admin view
router.get('/', requireAdmin, getAllAbstracts);

export default router;