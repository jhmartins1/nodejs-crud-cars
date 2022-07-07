import { Request, Response } from "express";
import { CreateCarService } from "../services/CreateCarService";

export class CreateCarController {
  async handle(req: Request, res: Response) {
    const {name, car_brand, color} = req.body;
    const createCar = new CreateCarService();
    const result = await createCar.execute({name, car_brand, color});

    if(result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(201).json(result);
  }
}