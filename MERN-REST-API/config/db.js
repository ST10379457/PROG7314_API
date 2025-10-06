import mongoose from "mongoose";
import dotenv from "dotenv";

//db.js freeCodeCamp.org (2024)

dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected: "+conn.connection.host)
    }
    catch (error) {
        console.error("Error: "+error.message);
        process.exit(1); //0 = fail, 1 = success freeCodeCamp.org (2024)
    }
};

/*
Reference list:
MERN Stack Tutorial with Deployment – Beginner's Course. 2024. YouTube video, added by freeCodeCamp.org. [Online]. Available at: https://www.youtube.com/watch?v=O3BUHwfHf84&t=1620s [Accessed 3 October 2025]. 
*/