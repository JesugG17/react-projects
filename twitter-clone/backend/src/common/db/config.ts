import mongoose from 'mongoose';
import env from "../../../config";

export const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGODB_ATLAS);
        console.log('Database running');
    } catch (error) {
        console.log(error);
        console.log('Can not connect to database');
    }
};
