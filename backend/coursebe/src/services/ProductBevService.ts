import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { ProductBeverage } from "../entities/ProductBeverages";
import { Request, Response } from "express";

class ProductBevService {
  private readonly ProductBevRepository: Repository<ProductBeverage> =
    AppDataSource.getRepository(ProductBeverage);

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const productBev = this.ProductBevRepository.create({
          name: data.name,
          price: data.price,
          quantity: data.quantity,
          image: data.image,
      });
      this.ProductBevRepository.save(productBev);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const productBev = await this.ProductBevRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      await this.ProductBevRepository.delete(productBev);
      return res.status(200).json("data berhasil di hapus");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const productBev = await this.ProductBevRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      productBev.name = req.body.name;
      productBev.price = req.body.price;
      productBev.quantity = req.body.quantity;
      productBev.image = req.body.image;
      await this.ProductBevRepository.save(productBev);
      return res.status(200).json("data berhasil di ubah");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async get(req: Request, res: Response) {
    try {
      const productBev = await this.ProductBevRepository.find();
      return res.status(200).json(productBev);
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }
}

export default new ProductBevService();
