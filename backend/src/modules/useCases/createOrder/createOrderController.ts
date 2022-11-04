import { Request, Response } from 'express';
import { CreateOrderUseCase } from './createOrderUseCase';

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    const createOrderUseCase = new CreateOrderUseCase();
    const result = await createOrderUseCase.execute(req.body);
    res.status(201).json(result);
  }
}
