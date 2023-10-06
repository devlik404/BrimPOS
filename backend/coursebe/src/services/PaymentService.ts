import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Payment } from "../entities/Payment";

require("dotenv").config();
class PaymentService {
  private readonly PaymentHistoryRepository: Repository<Payment> =
    AppDataSource.getRepository(Payment);

  async create(req: Request, res: Response) {
      try {
        const data = req.body;
      const payment_history = this.PaymentHistoryRepository.create({
          // status:data.status,
          // total:data.total,
      });
   
      this.PaymentHistoryRepository.save(payment_history);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

}

export default new PaymentService();
