import doctors from "../Models/doctorSchema.js";
import doctorjoi from "../joiValidation/doctorValidation.js";
import bcrypt from 'bcrypt';

export const doctorRegistration = async (req, res) => {

    const { value, error } = doctorjoi.validate(req.body);

    if (error) {
        return res.status(404).json({ Details: error });
    }

    const { Doctor_ID, Full_Name, Email, Phone_Number, Gender, DOB, Specialization, Experience, Address, Consultation_Address, District, State, Password } = value

    const existingdoctor = await doctors.findOne({ Doctor_ID })

    if (existingdoctor) {
        return res.status(200).json({ message: "Already registered" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newDoctor = new doctors({
        Doctor_ID,
        Full_Name,
        Email,
        Phone_Number,
        Gender,
        DOB,
        Specialization,
        Experience,
        Address,
        Consultation_Address,
        District,
        State,
        Password: hashedPassword
    });

    await newDoctor.save();

    return res.status(201).json({ messsage: "Registered successfully", data: newDoctor });

};