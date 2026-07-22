import mongoose from "mongoose";
import { mongodbURL } from "../secret.js";


export const connectDatabase = async (options = {}) => {
    try {
        await mongoose.connect(mongodbURL, options)
        console.log('Connections to DB is successfully.');

        mongoose.connection.on('error', (error: any) => {
            console.log('DB connection error: ', error);
        });
    } catch (error) {
        console.log(error)
    }
} 