import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarsController(req, res, next).createCar());

export default routes;