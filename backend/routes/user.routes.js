import express from 'express';
import {body} from 'express-validator';
import { getUserProfile, loginUser, logoutUser, registerUser } from '../controller/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength(3).withMessage("firstname should be alteast of 3 characters"),
    body('password').isLength(4).withMessage("Password must be atleast of 5 characters long")
],registerUser)

router.post("/login",[body('email').isEmail().withMessage("Invalid Email")],loginUser)

router.get("/profile",authMiddleware,getUserProfile)

router.get("/logout",authMiddleware,logoutUser);


export default router;
