import Joi from "joi";

const bloodjoi = Joi.object({
    Donor_name: Joi.string().min(2).required(),
    Blood_group: Joi.string().required(),
    email: Joi.string().email().required(),
    Phone_number: Joi.number().min(10).required(),
    State: Joi.string().required(),
    City: Joi.string().required()
});

export default bloodjoi;