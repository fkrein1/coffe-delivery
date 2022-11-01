import { prisma } from '../../database/prismaClient';

export class FindAllCoffeesUseCase {
  async execute() {
    const coffees = await prisma.coffee.findMany();
    return coffees;
  }
}
