import { Router } from 'express';
import { registerTeam } from '../controllers/registration.controller.js';

const router = Router();

// POST /api/register
router.post('/', registerTeam);

export default router;
