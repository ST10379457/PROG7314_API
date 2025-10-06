import mongoose from "mongoose";

//Model.js freeCodeCamp.org (2024)

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    calories:{
        type: Number,
        required: true
    },
}, {
    timestamps: true //createdAt + updatedAt freeCodeCamp.org (2024)
});

const Food = mongoose.model("Food", foodSchema);

export default Food;

/*
Reference list:
MERN Stack Tutorial with Deployment – Beginner's Course. 2024. YouTube video, added by freeCodeCamp.org. [Online]. Available at: https://www.youtube.com/watch?v=O3BUHwfHf84&t=1620s [Accessed 3 October 2025]. 
*/