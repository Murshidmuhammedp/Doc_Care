import express from 'express';
import { signin, signup } from '../Controllers/UserController/userController.js'
import { bloodRegister } from '../Controllers/UserController/bloodRegisterController.js'

const router = express.Router();

router.post('/register', signup);
router.post('/login', signin);

// Blood Register

router.post('/bloodregister', bloodRegister);

export default router;