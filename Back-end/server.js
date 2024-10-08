import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '../Back-end/routes/userRouter.js';
import doctorRouter from '../Back-end/routes/doctorRouter.js';
import adminRouter from '../Back-end/routes/adminRouter.js';
import hospitalRouter from '../Back-end/routes/hospitalRouter.js'
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    origin: "https://doc-care-eight.vercel.app/",
    credentials: true
}));

app.use("/user/api", userRouter);
app.use("/user/api", doctorRouter);
app.use("/user/api", hospitalRouter);
app.use('/admin/api', adminRouter);

// DB connecting

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

// Server Connecting

const PORT = process.env.PORT || 6789

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});