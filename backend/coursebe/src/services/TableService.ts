import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Tables } from "../entities/Table";
import { Request, Response } from "express";

class TableService {
    private readonly TableRepository: Repository<Tables> = AppDataSource.getRepository(Tables);

    async find(req: Request, res: Response) {
        try {
            const tables = await this.TableRepository.find({
                relations: {
                    orders:{
                        OrderDetail:true,
                    }
                },
                order:{
                    tableName:"ASC",
                },
            });
            return res.status(200).json(tables);
        } catch (error) {
            return res.status(500).json("terjadi kesalahan");
        }
    }
    async post(req: Request, res: Response) {
        try {
          const data = req.body;
          const tablesn = await this.TableRepository.findOne({
            where: {
              tableName: data.tableName,
            },
          });
      
          if (!tablesn) {
            const tables = this.TableRepository.create({
                tableName: data.tableName,
              });
        
              await this.TableRepository.save(tables);
          } 
      
          
          return res.status(200).json("Data telah disimpan");
        } catch (error) {
          console.error(error);
          return res.status(500).json("Terjadi kesalahan");
        }
      }
      
}

export default new TableService();