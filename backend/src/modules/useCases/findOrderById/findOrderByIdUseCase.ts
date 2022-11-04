import { prisma } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';

export class FindOrderByIdUseCase {
  async execute(id: string) {
    const order = await prisma.order.findUnique({ where: { id } });
    if (!order) throw new AppError(404, 'Order not found');
    return order;
  }
}
