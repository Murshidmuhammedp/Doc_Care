import doctors from "../../Models/doctorSchema.js"

export const filterData = async (req, res, next) => {
    try {

        const { Specialization, District } = req.query;

        const filterCriteria = {};
        if (Specialization) {
            filterCriteria.Specialization = { $regex: new RegExp(Specialization, 'i') };
        }
        if (District) {
            filterCriteria.District = { $regex: new RegExp(District, 'i') };
        }
        const doctorsList = await doctors.find(filterCriteria);

        const filterData = doctorsList.filter((item) => item.approve == true);

        if (!filterData) {
            return res.status(202).json({ message: "No data found" });
        }


        return res.status(200).json({ message: "Data fetch successfully", data: filterData });

    } catch (error) {
        return next(error)
    }
}