import express from 'express';
import { doctorRegistration } from '../Controllers/doctorController.js';
import uploadImage from '../Middlewares/uploadImage.js';

const router = express.Router();

// Doctor Registration

router.post('/doctor/register', uploadImage, doctorRegistration);

export default router;