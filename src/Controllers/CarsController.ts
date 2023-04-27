import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/CarsService';
import ICar from '../Interfaces/ICar';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async createCar() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    const newCar = await this.service.createCar(car);
    return this.res.status(201).json(newCar);
  }

  public async listAllCars() {
    const allCars = await this.service.listAllCars();
    return this.res.status(200).json(allCars);
  }

  public async findCarById() {
    const carId = this.req.params.id;
    const car = await this.service.findCarById(carId);
    if (!car) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(car);
  }

  public async updateCarById() {
    const carId = this.req.params.id;
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    const updatedCar = await this.service.updateCarById(carId, car);
    if (!updatedCar) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(updatedCar);
  }
}

export default CarsController;