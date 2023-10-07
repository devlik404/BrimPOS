import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { products } from "../entities/Products";
import { Request, Response } from "express";

class ProductService {
  private readonly ProductRepository: Repository<products> =
    AppDataSource.getRepository(products);

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const products = this.ProductRepository.create({
        name: data.name,
        price: data.price,
        image: data.image,
        category: data.category,
      });
      this.ProductRepository.save(products);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const product = await this.ProductRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      await this.ProductRepository.delete(product);
      return res.status(200).json("data berhasil di hapus");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const product = await this.ProductRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.category = req.body.category;
      await this.ProductRepository.save(product);
      return res.status(200).json("data berhasil di ubah");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async get(req: Request, res: Response) {
    try {
      const product = await this.ProductRepository.find({});
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }
}

export default new ProductService();
