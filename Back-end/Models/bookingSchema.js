import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctors",
        required: true
    },
    patient_name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    time: [{

    }],
    bookingTime_Date: {
        type: Date,
        required: true,
        default: () => {
            const now = new Date();
            now.setHours(now.getHours() + 5);
            now.setMinutes(now.getMinutes() + 30);
            return now;
        }
    },
});

const booking = mongoose.model('booking', bookingSchema);

export default booking;