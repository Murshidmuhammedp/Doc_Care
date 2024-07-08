import bloodjoi from "../joiValidation/bloodRegValidation"

export const bloodRegister = (req, res, next) => {

    const { value, error } = bloodjoi.validate(req.body);

    if (error) {
        return res.status(400).json({ Details: error });
    }

    const { Donor_name, Blood_group, email, Phone_number } = value;

    
}