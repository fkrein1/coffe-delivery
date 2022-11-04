import { Router } from 'express';
import { CreateOrderController } from './modules/useCases/createOrder/createOrderController';
import { FindAllCoffeesController } from './modules/useCases/findAllCoffees/findAllCoffeesController';
import { FindOrderByIdController } from './modules/useCases/findOrderById/findOrderByIdController';

const routes = Router();

const findAllCoffeesController = new FindAllCoffeesController();
const createOrderController = new CreateOrderController();
const findOrderByIdController = new FindOrderByIdController();

routes.use('/coffees', findAllCoffeesController.handle);
routes.post('/orders', createOrderController.handle);
routes.get('/orders/:id', findOrderByIdController.handle);

export default routes;
