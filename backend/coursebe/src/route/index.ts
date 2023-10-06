import * as express from "express";
import { Request, Response } from "express";
import ValidationController from "../controllers/ValidationController";
import ProductController from "../controllers/ProductController";






const root = express.Router()
root.get("/",(req:Request,res:Response)=>{
    return res.json({ message: 'hello world' });
});

root.get("/order",);
root.get("/product",);
root.get("/table",);

// auth
root.post("/register",ValidationController.register);
root.post("/login",ValidationController.login);
root.get("/check",ValidationController.check);

// product
root.get("/product", ProductController.get);
root.post("/addproduct", ProductController.create);
root.delete("/deleteproduct/:id", ProductController.delete);
root.patch("/updateproduct/:id", ProductController.patch);


export default root;