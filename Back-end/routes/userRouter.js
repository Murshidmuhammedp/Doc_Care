import express from 'express';
import { signup } from '../Controllers/userController.js';

const router = express.Router();

router.post('/register', signup);

export default router;