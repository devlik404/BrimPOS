import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { ProductFood } from "../entities/ProductFood";
import { Request, Response } from "express";
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
class ProductFoodService {
  private readonly ProductFoodRepository: Repository<ProductFood> =
    AppDataSource.getRepository(ProductFood);

  async create(req: Request, res: Response) {
    const data = req.body;
    const loginSession = res.locals.loginSession;
 console.log(loginSession)
    try {
      const filename = res.locals.filename;
      console.log("filename",filename)
      const productFood = this.ProductFoodRepository.create({
          name:data.name,
          price:data.price,
          quantity:data.quantity,
          image:filename,
      });
      console.log("productFood",productFood)
      const cloudinaryConfig = cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });
      console.log("cloudinaryConfig",cloudinaryConfig)

      const cloudinaryResponse = await cloudinary.uploader.upload(
        "./uploads/" + filename
      );
      console.log("cloudinaryResponse",cloudinaryResponse)
      const dataCloud = this.ProductFoodRepository.create({
        name: productFood.name,
        price: productFood.price,
        quantity: productFood.quantity,
        image:cloudinaryResponse.secure_url,
      });
      console.log("dataCloud",dataCloud)
      this.ProductFoodRepository.save(dataCloud);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const productFood = await this.ProductFoodRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      await this.ProductFoodRepository.delete(productFood);
      return res.status(200).json("data berhasil di hapus");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }
}

export default new ProductFoodService();
