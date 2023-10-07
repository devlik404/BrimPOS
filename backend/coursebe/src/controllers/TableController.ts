import { Request, Response } from "express";
import TableService from "../services/TableService";

class TableController {
    find(req: Request, res: Response) {
        TableService.find(req, res);
    }
}

export default new TableController();