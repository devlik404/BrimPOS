import { Request, Response } from "express";
import { Repository } from "typeorm";
import { orders } from "../entities/Order";
import { AppDataSource } from "../data-source";

class OrderService {
  private readonly OrderRepository: Repository<orders> =
    AppDataSource.getRepository(orders);
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const orders = this.OrderRepository.create({
        total: data.total,
        productId: data.productId,
        tableId: data.tableId,
        payment_histories: data.payment_histories,
      });

      this.OrderRepository.save(orders);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async find(req: Request, res: Response) {
    try {
      const orders = await this.OrderRepository.find({
        relations: {
          productId: true,
          tableId: true,
          payment_histories: true,
        },
      });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }
}

export default new OrderService();
