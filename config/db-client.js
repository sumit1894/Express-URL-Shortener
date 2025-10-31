

//todo using mongoDB
/*
import { MongoClient } from "mongodb";
import { env } from "./env.js";

export const dbClient = new MongoClient(env.MONGODB_URI);
*/

//todo using mongoo

import mongoose from "mongoose";
import { env } from "./env.js";


export const connectDB=async()=>{
    try {
        await mongoose.connect(env.MONGODB_UTI);
    } catch (error) {
        console.error(error);
    }
}