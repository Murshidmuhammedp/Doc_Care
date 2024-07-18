import express from 'express';
import { adminLogin } from '../Controllers/adminController.js';
const router = express.Router();

// Admin Login

router.post('/login', adminLogin);

export default router;
