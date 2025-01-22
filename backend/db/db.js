import mongoose from "mongoose";

async function connectToDb(){
    await mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("Database connnected successfully!")
    }).catch(error => {
        console.log(error)
    })
}

export default connectToDb;