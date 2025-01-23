import { validationResult } from "express-validator";
import { createCaptian } from "../services/captian.services.js";
import captianModel from "../models/captian.model.js";

export const registerCaptian = async (req, res) => {

try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors : errors.array()})
    }
    const {fullname,email,password,vehicle} = req.body;

    const captianExists = await captianModel.findOne({email});
    if(captianExists){
        return res.status(400).json({message : "Captian already exists"}); 
    }

    const hashedPassword = await captianModel.hashPassword(password);

    const captian = await createCaptian({firstname : fullname.firstname,lastname : fullname.lastname,email,password : hashedPassword,color : vehicle.color,plate : vehicle.plate,capacity : vehicle.capacity,vehicleType : vehicle.vehicleType});

    const token = await captian.generateAuthToken();

    res.status(201).json({captian,token});
}
catch(error){
    res.status(500).json({success : false , message : error.message})
}

}