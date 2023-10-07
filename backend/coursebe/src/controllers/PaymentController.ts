import { Request, Response } from "express";
import PaymentService from "../services/PaymentService";

class PaymentController {
  create(req: Request, res: Response) {
    PaymentService.create(req, res);
  }

}

export default new PaymentController();
