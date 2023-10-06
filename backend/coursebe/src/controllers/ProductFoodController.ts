import { Request, Response } from "express";
import ProductFoodService from "../services/ProductFoodService";

class ProductFoodController {
  create(req: Request, res: Response) {
    ProductFoodService.create(req, res);
  }

  delete(req: Request, res: Response) {
    ProductFoodService.delete(req, res);
  }
}

export default new ProductFoodController();
