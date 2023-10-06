import * as express from "express";
import { Request, Response } from "express";
import ValidationController from "../controllers/ValidationController";
import ProductFoodController from "../controllers/ProductFoodController";
import ProductBevController from "../controllers/ProductBevController";






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

// product_food
root.get("/productfood", ProductFoodController.get);
root.post("/addproductfood", ProductFoodController.create);
root.delete("/deleteproductfood/:id", ProductFoodController.delete);
root.patch("/updateproductfood/:id", ProductFoodController.patch);

// product_beverage
root.get("/productbev", ProductBevController.get);
root.post("/addproductbev", ProductBevController.create);
root.delete("/deleteproductbev/:id", ProductBevController.delete);
root.patch("/updateproductbev/:id", ProductBevController.patch);




export default root;