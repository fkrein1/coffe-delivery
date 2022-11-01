import { Request, Response } from 'express';
import { FindAllCoffeesUseCase } from './findAllCoffeesUseCase';

export class FindAllCoffeesController {
  async handle(_req: Request, res: Response) {
    const findAllCoffeesUseCase = new FindAllCoffeesUseCase();
    const result = await findAllCoffeesUseCase.execute();
    res.status(200).json(result);
  }
}
