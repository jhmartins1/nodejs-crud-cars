import { prisma } from "../prisma/client";

export class GetAllCarsService {
  async execute() {
    const cars = await prisma.car.findMany({
      orderBy: {
        name: "desc"
      }
    });
    return cars;
  }
}