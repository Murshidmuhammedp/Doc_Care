import express from 'express';
import { signin, signup } from '../Controllers/UserController/userController.js'
import { bloodRegister } from '../Controllers/UserController/bloodRegisterController.js'
import { filterData } from '../Controllers/UserController/filterData.js';
import { bookingAppointment } from '../Controllers/UserController/booking.js';

const router = express.Router();

router.post('/register', signup);
router.post('/login', signin);

// Blood Register

router.post('/bloodregister', bloodRegister);

// Doctor Find

router.get('/finddoctors', filterData);

// Booking Doctor

router.post('/doctor/:doctorId/appointment/booking/:userId', bookingAppointment);

export default router;