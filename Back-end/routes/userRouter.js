import express from 'express';
import { signin, signup } from '../Controllers/UserController/userController.js'
import { bloodRegister } from '../Controllers/UserController/bloodRegisterController.js'
import { filterData } from '../Controllers/UserController/filterData.js';

const router = express.Router();

router.post('/register', signup);
router.post('/login', signin);

// Blood Register

router.post('/bloodregister', bloodRegister);

// Doctor Find

router.get('/finddoctors', filterData)

export default router;