import { Router } from 'express';
import { getUpcomingEvents } from '../controllers/eventController.js';

const router = Router();

router.get('/', getUpcomingEvents);

export default router;
