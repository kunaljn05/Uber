import  mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const captianSchema = new mongoose.Schema({
    fullname : {
       firstname : {
        type : String,
        required : true,
        minLength : [3,"First name must be at least 3 characters long"]
       },
       lastname : {
        type : String,
        required : true,
        minLength : [3,"Last name must be at least 3 characters long"]
       }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        match : [/.+\@.+\..+/,"Please enter a valid email"],
        minLength : [3,"Email must be at least 3 characters long"]
    },
    password : {
        type : String,
        required : true,
        minLength : [6,"Password must be at least 6 characters long"],
        select : false,
    },
    socketId : {
        type : String,
    },
    status : {
        type : String,
        enum : ["active","inactive"],
        default : "inactive"
    },
    vehicle : {
        color : {
            type : String,
            required : true,
            minLength : [3,"Color must be at least 3 characters long"]
        },
        plate : {
            type : String,
            required : true,
            minLength : [3,"Plate must be at least 3 characters long"]
        },
        capacity : {
            type : Number,
            required : true,
            min : [1,"Capacity must be of at least 1"]
        },
        vehicleType : {
            type : String,
            require : true,
            enum : ["car","motorcycle","auto"]
        }
    },
    location : {
        lat : {
            type : Number,
        },
        lng :{
            type : Number
        }
    }
})

 captianSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id},process.env.JWT_SECRET,{expiresIn : "24h"})
    return token;
 }

 captianSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
 }

 captianSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
 }

const captianModel = mongoose.model("Captian",captianSchema);
export default captianModel;