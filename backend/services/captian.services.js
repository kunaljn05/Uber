import captianModel from "../models/captian.model.js";

export const createCaptian = async (
 { firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType}
) => {
 try{
    if (
        !firstname ||
        !lastname ||
        !email ||
        !password ||
        !color ||
        !plate ||
        !capacity ||
        !vehicleType
      ) {
        throw new Error("Please provide all the fields ");
      }
    
      const captian = await captianModel.create({
        fullname : {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
      })
    
      return captian;
 }
 catch(error){
    throw new Error(error.message);
 }
};
