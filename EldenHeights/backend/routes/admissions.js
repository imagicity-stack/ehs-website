import { Router } from 'express';
import { submitApplication } from '../controllers/admissionController.js';

const router = Router();

router.post('/', submitApplication);

export default router;
