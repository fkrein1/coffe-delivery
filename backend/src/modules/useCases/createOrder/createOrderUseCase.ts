import { prisma } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';
import { CreateOrderSchema, ICreateOrderDTO } from '../../dtos/ICreateOrderDTO';

export class CreateOrderUseCase {
  async execute(order: ICreateOrderDTO) {
    const parsed = CreateOrderSchema.safeParse(order);
    if (!parsed.success) {
      throw new AppError(400, 'Invalid order schema');
    }

    const newOrder = await prisma.order.create({
      data: {
        zip: order.zip,
        street: order.street,
        number: order.number,
        complement: order.complement,
        neighborhood: order.neighborhood,
        city: order.city,
        state: order.state,
        paymentMethod: order.paymentMethod,
      },
    });

    const orderCoffeesOrderData = order.coffees.map((coffee) => {
      return {
        orderId: newOrder.id,
        coffeeId: coffee.id,
        quantity: coffee.quantity,
      };
    });

    await prisma.coffesOnOrders.createMany({ data: orderCoffeesOrderData });
    return newOrder;
  }
}
