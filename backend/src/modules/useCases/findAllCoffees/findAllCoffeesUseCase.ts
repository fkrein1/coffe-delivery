import { prisma } from '../../../database/prismaClient';

export class FindAllCoffeesUseCase {
  async execute() {
    const coffees = await prisma.coffee.findMany({ orderBy: { price: 'asc' } });
    return coffees;
  }
}
