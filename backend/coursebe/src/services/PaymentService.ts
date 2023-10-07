import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { PaymentHistories } from "../entities/PaymentHistory";

require("dotenv").config();
class PaymentService {
  private readonly PaymentHistoryRepository: Repository<PaymentHistories> =
    AppDataSource.getRepository(PaymentHistories);

  async create(req: Request, res: Response) {
      try {
        const data = req.body;
      const payment_history = this.PaymentHistoryRepository.create({
          status:data.status,
          total:data.total,
      });
   
      this.PaymentHistoryRepository.save(payment_history);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

}

export default new PaymentService();
