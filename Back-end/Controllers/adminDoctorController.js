import doctors from "../Models/doctorSchema.js"

export const pendingrequest = async (req, res, next) => {

    try {

        const doctor = await doctors.find();

        if (!doctor) {
            return res.status(404).json({ message: "Doctor's not Found" });
        };

        const pending = doctor.filter((items) => items.approve == false)

        if (!pending || pending.length == 0) {
            return res.status(202).json({ message: "No pending request" })
        }

        return res.status(200).json({ message: "Successfully fetch data", data: pending })

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

        if (user.approve == false) {
            (user.approve = true)
            await user.save()
            return res.status(200).json({ message: "Approved" })
        }


    } catch (error) {
        return next(error)
    }
}

