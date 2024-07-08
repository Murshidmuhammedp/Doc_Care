import express from 'express';
import { signup } from '../Controllers/userController.js';
import { bloodRegister } from '../Controllers/bloodRegisterController.js';

const router = express.Router();

router.post('/register', signup);

// Blood Register

router.post('/bloodregister', bloodRegister);

export default router;