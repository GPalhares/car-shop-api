import { Router } from 'express';
import MotoryclesController from '../Controllers/MotoryclesController';
import validateMongoId from '../Middlewares/mongoID-Valid';

const routes = Router();

routes.get(
  '/motorcycles/:id', 
  validateMongoId,
  (req, res, next) => new MotoryclesController(req, res, next).findMotorcycleById(),
);
routes.get('/motorcycles', (req, res, next) => new MotoryclesController(req, res, next)
  . listAllMotorcycle());
routes.post('/motorcycles', (req, res, next) => new MotoryclesController(req, res, next)
  . createMotorcycle());
routes.put(
  '/motorcycles/:id', 
  validateMongoId,
  (req, res, next) => new MotoryclesController(req, res, next).updateMotorcycleById(),
);

export default routes;