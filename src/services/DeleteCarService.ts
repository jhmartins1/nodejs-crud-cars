import { prisma } from "../prisma/client";

export class DeleteCarService {
  async execute(id) {
    const carId = await prisma.car.findUnique({where: {id}})

    if(!carId) {
      return new Error("Car not found");
    }

    return await prisma.car.delete({
      where: {
        id
      }
    })
  }
}