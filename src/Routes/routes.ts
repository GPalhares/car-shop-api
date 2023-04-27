import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import validateMongoId from '../Middlewares/mongoID-Valid';

const routes = Router();

routes.get(
  '/cars/:id', 
  validateMongoId,
  (req, res, next) => new CarsController(req, res, next).findCarById(),
);
routes.get('/cars', (req, res, next) => new CarsController(req, res, next).listAllCars());

routes.post('/cars', (req, res, next) => new CarsController(req, res, next).createCar());

routes.put(
  '/cars/:id', 
  validateMongoId,
  (req, res, next) => new CarsController(req, res, next).updateCarById(),
);

export default routes;