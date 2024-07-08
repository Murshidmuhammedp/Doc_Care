import mongoose from "mongoose";

const bloodSchema = new mongoose.Schema({
    Donor_name: {
        type: String,
        required: true
    },
    Blood_group: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Phone_number: {
        type: Number,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: () => {
            const now = new Date();
            now.setHours(now.getHours() + 5);
            now.setMinutes(now.getMinutes() + 30);
            return now;
        }
    }
});

const Blood = mongoose.model('Blood', bloodSchema);

export default Blood;