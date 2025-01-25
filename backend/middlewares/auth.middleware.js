import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
import BlackListToken from '../models/blackListToken.model.js';
import captianModel from '../models/captian.model.js';

export const authUser = async(req,res,next)=>{
    const token = req?.cookies?.token || req?.headers?.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({success : false, message : "Unauthorized access"});
    }

    const blackListedToken = await BlackListToken.findOne({token});
    if(blackListedToken){
        return res.status(401).json({success : false, message : "Unauthorized access"});
    }
    try{
         const decoded  = jwt.verify(token,process.env.JWT_SECRET);
         const user = await userModel.findById(decoded._id);
         
         if(!user){
                return res.status(401).json({success : false, message : "Unauthorized access"});
         }

         req.user = user;
         return next();
    }
    catch(err){
        return res.status(401).json({success : false, message : "Unauthorized access"});
    }
}

export const authCaptian = async(req,res,next)=>{
    try{

    const token = req?.cookies?.token || req?.headers?.authorization?.split(' ')[1];
    if(!token){
        return res.stats(401).json({success : false, message : "Unauthorized access"});
    }
 
    const blackListedToken = await BlackListToken.findOne({token});

    if(blackListedToken){
        return res.status(401).json({success : false, message : "Unauthorized access"});
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const captian = await captianModel.findById(decoded._id);
    req.captian = captian;
    return next();

    }
    catch(error){
        res.status(500).json({success : false , message : error.message})
    }
}