import * as express from "express";
import { Request, Response } from "express";
import ValidationController from "../controllers/ValidationController";
import authenticate from "../middleware/authenticate";






const root = express.Router()
root.get("/",(req:Request,res:Response)=>{
    return res.json({ message: 'hello world' });
});



// auth
root.post("/register",ValidationController.register);
root.post("/login",ValidationController.login);
root.get("/check",authenticate,ValidationController.check);




export default root;