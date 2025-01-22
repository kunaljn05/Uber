import userModel from "../models/user.model.js";

export const createUser = async({firstname,lastname,email,password})=>{
    if(!firstname || !email || !password){
        throw new Error("All fields are required!");
    }

    const existingUser= await userModel.findOne({email : email});
    if(existingUser){
        throw new Error("Email already exist!");
    }

    const user = new userModel({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
    });

    // Save the user to the database
    await user.save();

    return user;
}