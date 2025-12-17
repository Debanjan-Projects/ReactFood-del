import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodcontroller.js';
import multer from "multer"

const foodRouter = express.Router();

//image storage engine..
//crrate a storage using multer diskstorage method .
const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req, file, cb) =>{
        return cb(null, `${Date.now()} ${file.originalname}`)
    }
})

//middleware upload has been created .
const upload = multer({storage: storage})

//data sennd to the server
//add a end point address .
foodRouter.post("/add",upload.single("image"),addFood)
//another end point.
foodRouter.get("/list",listFood)
//another end point
foodRouter.delete("/remove/:id", removeFood); // <-- FIXED: DELETE route with :id

export default foodRouter;
