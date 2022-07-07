import { Request, Response } from "express";
import { GetOneCarService } from "../services/GetOneCarService";

export class GetOneCarController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const getOneCarService = new GetOneCarService();
    const getOneCarById = await getOneCarService.execute(id);

    if(getOneCarById instanceof Error) {
      return res.status(404).json({message: "Car not found"})
    }
    return res.status(200).json(getOneCarById)
  }
}