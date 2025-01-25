import { validationResult } from "express-validator";
import { createCaptian } from "../services/captian.services.js";
import captianModel from "../models/captian.model.js";
import BlackListToken from "../models/blackListToken.model.js";

export const registerCaptian = async (req, res) => {

try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({success : false ,errors : errors.array()})
    }
    const {fullname,email,password,vehicle} = req.body;

    const captianExists = await captianModel.findOne({email});
    if(captianExists){
        return res.status(400).json({success : false , message : "Captian already exists"}); 
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

export const loginCaptian = async (req, res) => {
   try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success : false , message : errors.array()})
    }

    const {email,password} = req.body;

    const captian = await captianModel.findOne({email}).select("+password");

    if(!captian){
        return res.status(400).json({success : false , message : "captian not found"});
    }

    const isMatch = await captian.comparePassword(password);

    if(!isMatch){
        return res.status(400).json({success : false , message : "Invalid Password"});
    }

    const token = await captian.generateAuthToken();
    res.cookie("token",token);
    res.status(200).json({captian,token})
   }
   catch(error){
    res.status(500).json({success : false , message : error.message})
   }
}

export const captianProfile = async(req,res)=>{
    try{
       res.status(200).json(req?.captian || {});
    }
    catch(error){
        res.status(500).json({success : false , message : error.message})
    }
}

export const logoutCaptian = async(req,res)=>{
    try{
       const token = req?.cookies?.token || req?.headers?.authorization?.split(' ')[1];
       await BlackListToken.create({token});
       res.clearCookie("token");
       res.status(200).json({success : true , message : "Logged out successfully"});
    }
    catch(error){
        res.status(500).json({success : false , message : error.message})
    }
}