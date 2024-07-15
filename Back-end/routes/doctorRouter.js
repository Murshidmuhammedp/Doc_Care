import express from 'express';
import { doctorRegistration } from '../Controllers/doctorController.js';

const router = express.Router();

// Doctor Registration

router.post('/doctor/register', doctorRegistration);

export default router;