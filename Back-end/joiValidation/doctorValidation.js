import Joi from 'joi';

const doctorjoi = Joi.object({
    Doctor_ID: Joi.string().required(),
    Full_Name: Joi.string().required(),
    Email: Joi.string().email().required(),
    Phone_Number: Joi.number().required(),
    Gender: Joi.string().required(),
    DOB: Joi.string().required(),
    Specialization: Joi.string().required(),
    Experience: Joi.number().required(),
    Address: Joi.string().required(),
    Consultation_Address: Joi.string().required(),
    District: Joi.string().required(),
    State: Joi.string().required(),
    Password: Joi.string().required(),
});

export default doctorjoi;