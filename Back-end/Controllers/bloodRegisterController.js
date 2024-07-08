import Blood from "../Models/bloodRegisterSchema.js";
import bloodjoi from "../joiValidation/bloodRegValidation.js"

export const bloodRegister = async (req, res, next) => {

    const { value, error } = bloodjoi.validate(req.body);

    if (error) {
        return res.status(400).json({ Details: error });
    }

    const { Donor_name, Blood_group, email, Phone_number, State, City } = value;

    const newDonor = new Blood({
        Donor_name,
        Blood_group,
        email,
        Phone_number,
        State,
        City
    });

    await newDonor.save();

    return res.status(202).json({ message: "Registered successfully", data: newDonor });
}