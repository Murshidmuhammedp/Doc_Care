import Joi from 'joi';

const userjoi = Joi.object({
    username: Joi.string().min(2).max(30).required(),
    phone_number: Joi.number().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
});
export default userjoi;