import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Orders } from "../entities/Order";
import { AppDataSource } from "../data-source";

class OrderService {
  private readonly OrderRepository: Repository<Orders> =
    AppDataSource.getRepository(Orders);
  async create(req: Request, res: Response) {
    console.log("reqBody", req.body);
    try {
      const data = req.body;
      const orders = this.OrderRepository.create({
        total: data.total,
        products: data.products,
        status: data.status,
        table: data.table,
        paymentHistory: data.payment_histories,
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
        where: {
          table: {
            id: req.params.id,
          },
        },
        relations: {
          products: true,
          table: true,
        }
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
