import { Request, Response } from "express";
import * as express from "express";




const router = express.Router();


router.get("/",(req:Request,res:Response)=>{
    return res.json({ message: 'hello world' });
});