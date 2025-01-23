import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './db/db.js';
dotenv.config();
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js'
import captionRoutes from "./routes/captian.routes.js"

const app = express();
connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use("/users",userRoutes);
app.use("/captian",captionRoutes);
export default app;