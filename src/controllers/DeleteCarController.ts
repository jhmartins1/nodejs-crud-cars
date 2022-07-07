import { Request, Response } from "express";
import { DeleteCarService } from "../services/DeleteCarService";

export class DeleteCarController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    
    const deleteCar = new DeleteCarService();
    const result = await deleteCar.execute(id);

    if(result instanceof Error) {
      return res.status(404).json(result.message);
    }

    return res.status(200).json({message: "Car excluded"})
  }
}