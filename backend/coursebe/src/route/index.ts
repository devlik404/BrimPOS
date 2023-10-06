import * as express from "express";
import { Request, Response } from "express";
import ValidationController from "../controllers/ValidationController";
import ProductController from "../controllers/ProductController";
import OrderController from "../controllers/OrderController";

const root = express.Router()
root.get("/",(req:Request,res:Response)=>{
    return res.json({ message: 'hello world' });
});

// auth
root.post("/register",ValidationController.register);
root.post("/login",ValidationController.login);
root.get("/check",ValidationController.check);

// product
root.get("/product", ProductController.get);
root.post("/addproduct", ProductController.create);
root.delete("/deleteproduct/:id", ProductController.delete);
root.patch("/updateproduct/:id", ProductController.patch);

// order
root.get("/order", OrderController.find);
root.post("/addorder", OrderController.create);
// root.delete("/deleteorder/:id", OrderController.delete);
// root.patch("/updateorder/:id", OrderController.patch);


export default root;