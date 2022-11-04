import { Request, Response } from 'express';
import { FindOrderByIdUseCase } from './findOrderByIdUseCase';

export class FindOrderByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const findOrderByIdUseCase = new FindOrderByIdUseCase();
    const result = await findOrderByIdUseCase.execute(id);
    res.status(200).json(result);
  }
}
