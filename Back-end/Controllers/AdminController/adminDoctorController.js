import doctors from "../../Models/doctorSchema.js"

export const pendingrequestdoctor = async (req, res, next) => {

    try {

        const doctor = await doctors.find({ approve: false });

        if (!doctor) {
            return res.status(404).json({ message: "Doctor's not Found" });
        };

        return res.status(200).json({ message: "Successfully fetch data", data: doctor })

    } catch (error) {
        return next(error)
    }
};

export const rejectDoctor = async (req, res, next) => {

    try {

        const id = req.params.id;

        await doctors.findByIdAndDelete(id)

        return res.status(200).json({ message: "Rejected" });

    } catch (error) {
        return next(error)
    }
}

export const approvedoctor = async (req, res, next) => {

    try {

        const id = req.params.id;

        const user = await doctors.findById(id);

        user.approve = true
        await user.save()
        return res.status(200).json({ message: "Approved" })



    } catch (error) {
        return next(error)
    }
}

export const viewDoctors = async (req, res, next) => {
    try {
        const doctor = await doctors.find()
        if (!doctor) {
            return res.status(404).json({ message: "Doctors not Found" })
        };
        return res.status(200).json({ message: "Data fetched", data: doctor })
    } catch (error) {
        return next(error)
    }
}
