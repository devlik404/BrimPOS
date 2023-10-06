import { Request, Response } from "express";
import ProductBevService from "../services/ProductBevService";

class ProductBevController {
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

export default new ProductBevController();
