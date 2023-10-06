import { Request, Response } from "express";
import ProductBevService from "../services/ProductService";

class ProductController {
  create(req: Request, res: Response) {
    ProductBevService.create(req, res);
  }

  delete(req: Request, res: Response) {
    ProductBevService.delete(req, res);
  }

  patch(req: Request, res: Response) {
    ProductBevService.patch(req, res);
  }

  get(req: Request, res: Response) {
    ProductBevService.get(req, res);
  }
}

export default new ProductController();
