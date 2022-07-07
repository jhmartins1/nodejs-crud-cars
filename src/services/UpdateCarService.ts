import { prisma } from "../prisma/client";
import { ICar } from "../utils/CarUtils";

export class UpdateCarService {
  async execute({name, color, car_brand, id}: ICar): Promise<ICar | Error> {
    if(!name) {
      return new Error('Name is missing');
    }

    if(!color) {
      return new Error('Color is missing');
    }

    if(!car_brand) {
      return new Error('Car brand is missing');
    }

    const car = await prisma.car.update({
      where: {id},
      data: {
        name,
        color,
        car_brand
      }
    })
    return car;
  }
}