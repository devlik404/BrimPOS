import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Orders } from "../entities/Order";
import { AppDataSource } from "../data-source";
import { PaymentHistories } from "../entities/PaymentHistory";

class OrderService {
  private readonly PaymentHistoriesRepository: Repository<PaymentHistories> =
    AppDataSource.getRepository(PaymentHistories);
  private readonly OrderRepository: Repository<Orders> =
    AppDataSource.getRepository(Orders);

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const paymentHistory = this.PaymentHistoriesRepository.create({
        status: data.status,
        total: data.total,
      });
      await this.PaymentHistoriesRepository.save(paymentHistory);

      const paymentId = paymentHistory.id;

      const orders = this.OrderRepository.create({
        total: data.total,
        status: data.status,
        products: data.products,
        table: data.table,
        paymentHistory: {
          id: paymentId,
        },
      });

      await this.OrderRepository.save(orders);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async find(req: Request, res: Response) {
    try {
      const orders = await this.OrderRepository.find({
        where: {
          table: {
            id: req.params.id,
          },
        },
        relations: {
          products: true,
          table: true,
          paymentHistory: true,
        },
      });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const order = await this.OrderRepository.findOne({
        where: {
          id: req.params.id,
        },
        relations: {
          products: true,
          table: true,
          paymentHistory: true,
        }
      });
      order.total = req.body.total;
      await this.OrderRepository.save(order);
      return res.status(200).json("data berhasil di ubah");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }
}

export default new OrderService();
