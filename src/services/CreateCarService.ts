import { prisma } from "../prisma/client";
import { ICar } from "../utils/CarUtils";

export class CreateCarService {
  async execute({name, car_brand, color}: ICar): Promise<ICar | Error> {
    if(!name) {
      return new Error("Name is missing");
    }

    if(!car_brand) {
      return new Error("Car Brand is missing");
    }

    if(!color) {
      return new Error("Color is missing");
    }

    const car = await prisma.car.create({
      data: {
        name,
        car_brand,
        color
      }
    })

    return car;
  }
}