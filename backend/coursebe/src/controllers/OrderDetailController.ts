import { Request, Response } from "express";
import OrderService from "../services/OrderService";

class OrderController {
  create(req: Request, res: Response) {

     OrderService.create(req, res);

  }

  //   delete(req: Request, res: Response) {
  //     OrderService.delete(req, res);
  //   }

    patch(req: Request, res: Response) {
      OrderService.patch(req, res);
    }

  find(req: Request, res: Response) {
    OrderService.find(req, res);
  }
}

export default new OrderController();
