import { Request, Response } from "express";
import { GetAllCarsService } from "../services/GetAllCarsService";

export class GetAllCarsController {
  async handle(req: Request, res: Response) {
    const getAllCarsService = new GetAllCarsService();
    const result = await getAllCarsService.execute();
    return res.status(200).json(result);
  }
}