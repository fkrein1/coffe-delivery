import { Router } from 'express';
import { FindAllCoffeesController } from './useCases/findAllCoffees/findAllCoffeesController';

const routes = Router();

const findAllCoffeesController = new FindAllCoffeesController();

routes.use('/coffees', findAllCoffeesController.handle);

export default routes;
