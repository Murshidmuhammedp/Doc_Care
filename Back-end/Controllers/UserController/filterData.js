import doctors from "../../Models/doctorSchema.js"

export const filterData = async (req, res, next) => {
    try {
         
        const doctorsList = await doctors.find();

        const filterData = doctorsList.filter((item) => item.approve == true);

        if (!filterData) {
            return res.status(202).json({ message: "No data found" });
        }


        return res.status(200).json({ message: "Data fetch successfully", data: filterData });

    } catch (error) {
        return next(error)
    }
}