import doctors from "../../Models/doctorSchema.js";
 
export const appointments = async (req, res, next) => {
    try {
        const Id = req.params.doctorId;
        const doctor = await doctors.findById(Id).populate({
            path: 'booking',
            // populate: { path: 'userId' }
        })
        // console.log(doctor);

        if (!doctor) {
            return res.status(404).json({ message: "Doctor not Found" })
        };
        if (!doctor.booking || doctor.booking.length == 0) {
            return res.status({ message: "No booking Found" })
        };
        return res.status(200).json({ message: "Fetched Successfully", data: doctor })

    } catch (error) {
        return next(error)
    }
}