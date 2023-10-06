import * as express from "express";
import { Request, Response } from "express";






const root = express.Router()
root.get("/",(req:Request,res:Response)=>{
    return res.json({ message: 'hello world' });
});

root.get("/threads");
export default root;