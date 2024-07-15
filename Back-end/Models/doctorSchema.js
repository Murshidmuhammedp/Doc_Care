import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    Doctor_ID: {
        type: String,
        required: true
    },
    Full_Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone_Number: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    Specialization: {
        type: String,
        required: true
    },
    Experience: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Consultation_Address: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    booking: [{

    }],
    accountCreatedDate: {
        type: Date,
        required: true,
        default: () => {
            const now = new Date();
            now.setHours(now.getHours() + 5);
            now.setMinutes(now.getMinutes() + 30);
            return now;
        }
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const doctors = mongoose.model("doctors", doctorSchema);

export default doctors;