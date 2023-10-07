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
                    orders: true,
                },
            });
            return res.status(200).json(tables);
        } catch (error) {
            return res.status(500).json("terjadi kesalahan");
        }
    }
}

export default new TableService();