import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Food from "./models/food.model.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());// allows us to use to accept JSON data in req body freeCodeCamp.org (2024)

//Intialise server freeCodeCamp.org (2024)
app.get("/", (req,res) => {
    res.send("Server is ready");
});

//Get all data: freeCodeCamp.org (2024)
app.get("/api/foods", async (req, res) => {
    try{
        const foods = await Food.find({});
        res.status(200).json({ success: true, data: foods });
    } catch (error) {
        console.error("Error in fetching foods:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//Add data: freeCodeCamp.org (2024)
app.post("/api/addFood", async (req, res) => {
    const food = req.body;

    if (!food.name || !food.calories || !food.userID) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try{
        const newFood = new Food(food);
        await newFood.save();
        res.status(201).json({ success: true, data: newFood });
    } catch (error) {
        console.error("Error in Create food:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//Update data: freeCodeCamp.org (2024)
app.put("/api/foods/:id", async (req, res) => {
     try{
        const { id } = req.params;
        const food = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ success: false, message: "Invalid Food Id" });
        }
        else{
            const updatedFood = await Food.findByIdAndUpdate(id, food, {new:true});
            res.status(200).json({ success: true, data: updatedFood });
        }
    } catch (error) {
        console.error("Error in updating foods:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//Delete data by id: freeCodeCamp.org (2024)
app.delete("/api/foods/:id", async (req, res) => {
    try{
        const { id } = req.params;
        await Food.findByIdAndDelete(id);
        console.log("Deleted id: ",id);
        res.status(200).json({ success: true, message: "Food delete" });
    } catch (error){
        console.log("Error in deleting foods:", error.message);
        res.status(404).json({ success: false, message: "Food not found" });
    }
});

//freeCodeCamp.org (2024)

const PORT = process.env.PORT || 5000;

app.listen(PORT
    , () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

/*
Reference list:
MERN Stack Tutorial with Deployment – Beginner's Course. 2024. YouTube video, added by freeCodeCamp.org. [Online]. Available at: https://www.youtube.com/watch?v=O3BUHwfHf84&t=1620s [Accessed 3 October 2025]. 
*/