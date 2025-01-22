import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
import BlackListToken from '../models/blackListToken.model.js';

export const authMiddleware = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
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