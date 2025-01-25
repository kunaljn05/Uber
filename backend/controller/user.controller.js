import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import { createUser } from "../services/user.services.js";
import BlackListToken from "../models/blackListToken.model.js";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success : false , error: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

export const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success : false, error: errors.array() });
  }
  const {email,password} = req.body;
  const user = await userModel.findOne({email}).select("+password");

  if(!user){
    return res.status(401).json({
        success : false,
        message : "Invalid Email or Password"
    })
  }

  const isMatch = await user.comparePassword(password);

  if(!isMatch){
    return res.status(401).json({
        success : false,
        message : "Invalid Email or Password"
    })
  }

  const token = await user.generateAuthToken();
  res.cookie("token",token,{expiresIn : "24h"});
  user.password = "";
  res.status(201).json({token,user});
};

export const getUserProfile = async(req,res,next)=>{
try{
  res.status(200).json(req.user || {});
}
catch(error){
  res.status(500).json({
    success : false,
    message : "Internal Server Error"
  })
}
}

export const logoutUser = async(req,res,next)=>{
  try{
   const token = req.cookies.token || req.headers.authorization.split(" ")[1];
   const blakcListToken = await BlackListToken.create({token});
   res.clearCookie("tokne");
   res.status(200).json({
    success : true,
    message : "User Logged Out"
   })
  }
  catch(err){
    res.status(500).json({
      success : false,
      message : "Internal Server Error"
  })
}
}
