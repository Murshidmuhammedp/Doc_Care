import express from 'express';
import { doctorlogin, doctorRegistration } from '../Controllers/DoctorController/doctorController.js';
import uploadImage from '../Middlewares/uploadImage.js';

const router = express.Router();

// Doctor Registration

router.post('/doctor/register', uploadImage, doctorRegistration);

// Doctor Login

router.post('/doctor/login', doctorlogin);

export default router;