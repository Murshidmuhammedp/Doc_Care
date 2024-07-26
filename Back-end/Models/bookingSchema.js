import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctors",
        required:true
    },
})