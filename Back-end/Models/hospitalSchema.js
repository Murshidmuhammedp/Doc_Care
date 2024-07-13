import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
     
});

const hospitals = mongoose.model("hospitals", hospitalSchema);

export default hospitals;