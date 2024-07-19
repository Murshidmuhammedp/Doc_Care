import express from 'express';
import { adminLogin } from '../Controllers/adminController.js';
import { BlockandUnblock, ViewallUser } from '../Controllers/adminUserController.js';
const router = express.Router();

// Admin Login

router.post('/login', adminLogin);

// User Controller

router.get('/userdata', ViewallUser);
router.patch('/blockandunblock/:id', BlockandUnblock);

export default router;
