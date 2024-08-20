import Users from "../../Models/userSchema.js";
import doctors from '../../Models/doctorSchema.js';
import booking from "../../Models/bookingSchema.js";
import sendmail from "../../Modules/nodeMailer.js";

export const bookingAppointment = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const doctorId = req.params.doctorId;

        const user = await Users.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        };

        const doctor = await doctors.findById(doctorId)
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        };

        const { name, phoneNumber, date, time } = req.body;
        console.log(date,"ithaan date");

        const newBooking = await booking.create({
            userId: user._id,
            doctorId: doctor._id,
            patient_name: name,
            contact_number: phoneNumber,
            time,
            date: new Date(date),
        });
        user.booking.push(newBooking._id);
        await user.save();
        doctor.booking.push(newBooking._id);
        await doctor.save()

        // const Userdata = {
        //     email: user.email,
        //     subject: "Your booking status",
        //     text: `We are pleased to confirm your appointment with Dr.${doctor.full_Name}.`,
        //     date: `${(new Date(date))}`,
        //     time: `${time}`
        // };
        // await sendmail(Userdata);

        // const Doctordata = {
        //     email: doctor.email,
        //     subject: 'New Appointment Booked',
        //     text: ` A new appointment has been booked by ${name}`,
        //     date: `${(new Date(date))}`,
        //     time: `${time}`
        // };

        // await sendmail(Doctordata);

        return res.status(200).json({ message: "Booking Successfully Completed" })

    } catch (error) {
        return next(error)
    }
}

export const bookedTimeSlot = async (req, res) => {
    try {
        const Id = req.params.Id;
        const { date } = req.query;
        // console.log(Id);


        // console.log(date);


        const bookings = await booking.find({ doctorId: Id, date: date });
        console.log(bookings, "slots");

        return res.status(200).json({ data: bookings });
    } catch (error) {
        return res.status(500).send({ error: "error fetching bookings" });
    }
}