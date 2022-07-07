import { Request, Response } from "express";
import { UpdateCarService } from "../services/UpdateCarService";

export class UpdateCarController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const {name, car_brand, color} = req.body;

    const updateCar = new UpdateCarService();
    const result = await updateCar.execute({id, name, color, car_brand})

    if(result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}