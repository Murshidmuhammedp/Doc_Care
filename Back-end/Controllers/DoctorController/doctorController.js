import doctors from "../../Models/doctorSchema.js";
import doctorjoi from "../../joiValidation/doctorValidation.js";
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken'

export const doctorRegistration = async (req, res) => {

    const { value, error } = doctorjoi.validate(req.body);

    if (error) {
        return res.status(404).json({ Details: error });
    }

    const { Doctor_ID, Full_Name, Email, Phone_Number, Gender, DOB, Specialization, Experience, Consultation_Fee, Consultation_Address, District, State, Pincode, Password } = value

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
        Consultation_Fee,
        Consultation_Address,
        District,
        State,
        Pincode,
        Image: req.cloudinaryImageUrl,
        Password: hashedPassword
    });

    await newDoctor.save();

    return res.status(201).json({ message: "Registered successfully", data: newDoctor });

};

export const doctorlogin = async (req, res, next) => {
    try {

        const { Email, Password } = req.body;
        console.log(Email);
        console.log(Password);
        const Validuser = await doctors.findOne({ Email });
        console.log('Validuser:', Validuser);
        if (!Validuser) {
            return res.status(404).json({ message: "User not found" })
        }
        if (Validuser.approve == false) {
            return res.status(202).json({ message: "Your account is not approved" })
        };
        if (Validuser.isDeleted == true) {
            return res.status(202).json({ message: "Account is temporarily suspended" })
        };
        console.log('Password:', Password);
        console.log('Doctor Password:', Validuser.Password);

        const validpassword = bcrypt.compareSync(Password, Validuser.Password);

        if (!validpassword) {
            return res.status(401).json({ message: "Invalid username or password" })
        }

        const token = Jwt.sign({ id: Validuser._id }, process.env.DOCTOR_JWT_SECRET_KEY);
        const { Password: hashedPassword, ...rest } = Validuser._doc;
        const expiryDate = new Date(Date.now() + 60 * 1000);

        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate });
        res.status(200).json({ message: "successfully login", token, data: rest });

    } catch (error) {
        return next(error)
    }
};