import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
  create(req: Request, res: Response) {
    ProductService.create(req, res);
  }

  delete(req: Request, res: Response) {
    ProductService.delete(req, res);
  }

  patch(req: Request, res: Response) {
    ProductService.patch(req, res);
  }

  get(req: Request, res: Response) {
    ProductService.get(req, res);
  }
}

export default new ProductController();
