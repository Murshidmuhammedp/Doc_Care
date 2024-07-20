import express from 'express';
import { adminLogin } from '../Controllers/adminController.js';
import { BlockandUnblock, ViewallUser } from '../Controllers/adminUserController.js';
import { approvedoctor, pendingrequest, rejectDoctor } from '../Controllers/adminDoctorController.js';
const router = express.Router();

// Admin Login

router.post('/login', adminLogin);

// User Controller

router.get('/userdata', ViewallUser);
router.patch('/blockandunblock/:id', BlockandUnblock);

// Doctor Controller

router.get('/workers/pendingrequest', pendingrequest);
router.delete('/workers/rejected/:id', rejectDoctor);
router.patch('/workers/approved/:id', approvedoctor);

export default router;
