import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add food item ,
const addFood = async (req, res) =>{

    //store the product data in the databse .

    let image_filename =`${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        category: req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success: true, message: "Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }

}

//list- food ----all food -list .
const listFood = async(req, res)=> {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log("Error");
        res.json({success:false, message:"Error"})
    }
}

//remove food item .
const removeFood = async(req, res)=>{
    try {
        //find the food item which  i want to delete .
        //find the food in the model using the id .
        const foodId = req.params.id; // fixed: get id from URL param
        const food = await foodModel.findById(foodId);

        if(!food){
            return res.json({success:false, message:"Food not found"});
        }

        //delete the imege from the uploads filee .
        fs.unlink(`uploads/${food.image}`, (err) => {
            if(err) console.log("Error deleting image:", err);
        });

        //delete the food item from the database .
        await foodModel.findByIdAndDelete(foodId);
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}

export { addFood, listFood, removeFood }
