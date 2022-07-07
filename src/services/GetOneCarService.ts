import { prisma } from "../prisma/client";

export class GetOneCarService {
  async execute(id) {
    const carId = await prisma.car.findUnique({
      where: {id}
    })
    if(!carId) {
      return new Error("Car not found");
    }
    return carId;
  }
}