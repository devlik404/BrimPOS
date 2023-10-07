import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Products } from "../entities/Products";
import { Request, Response } from "express";

const cloudinary = require("cloudinary").v2;
require("dotenv").config();
class ProductService {
  private readonly ProductRepository: Repository<Products> =
    AppDataSource.getRepository(Products);

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      console.log("data product",data)
      const filename = res.locals.filename;
      console.log("filename",filename)
      const products = this.ProductRepository.create({
          name: data.name,
          price: data.price,
          category: data.category,
          image:filename,
      });
      console.log("product",products)
          cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });
    

      const cloudinaryResponse = await cloudinary.uploader.upload(
        "./uploads/" + filename
      );
  
      const dataCloud = this.ProductRepository.create({
        name: products.name,
        price: products.price,
        category: products.category,
        image:cloudinaryResponse.secure_url,
      });
     
      console.log("dataCloud",dataCloud)
      await this.ProductRepository.save(dataCloud);
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
      const data = req.body;
      const filename = res.locals.filename;
      console.log("filename",filename)
      const product = await this.ProductRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });
      const cloudinaryResponse = await cloudinary.uploader.upload(
        "./uploads/" + filename
      );
      product.name = data.name;
      product.price = data.price;
      product.image = cloudinaryResponse.secure_url;
      product.category = data.category;
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
