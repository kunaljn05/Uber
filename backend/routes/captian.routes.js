import epxress from "express";
import { body } from "express-validator";
import { registerCaptian } from "../controller/captian.controller.js";
const router = epxress.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({min:3})
      .withMessage("firstname should be alteast of 3 characters long"),
    body("fullname.lastname")
      .isLength({min:3})
      .withMessage("lastname should be alteast of 3 characters long"),
    body("password")
      .isLength({min:5})
      .withMessage("Password must be atleast of 5 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("color should be alteast of 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("plate should be alteast of 3 characters long"),
    body("vehicle.capacity").isInt(({min: 1 })).withMessage("capacity should be alteast 1"),
    body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]).withMessage("vehicleType should be car, motorcycle or auto"),
  ],
  registerCaptian
);

export default router;
