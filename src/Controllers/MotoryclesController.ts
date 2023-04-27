import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcyclesService';
import IMotorcycles from '../Interfaces/IMotorcycle';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async createMotorcycle() {
    const motorcycle: IMotorcycles = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    const newMotorcycle = await this.service.createMotorcycle(motorcycle);
    return this.res.status(201).json(newMotorcycle);
  }

  public async listAllMotorcycle() {
    const allMotorcycle = await this.service.listAllMotorcycle();
    return this.res.status(200).json(allMotorcycle);
  }

  public async findMotorcycleById() {
    const motorcycleID = this.req.params.id;
    const motorcycle = await this.service.findMotorcycleById(motorcycleID);
    if (!motorcycle) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(motorcycle);
  }

  public async updateMotorcycleById() {
    const motorcycleID = this.req.params.id;
    const motorcycle: IMotorcycles = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    const updatedMotorcycle = await this.service.updateMotorcycleById(motorcycleID, motorcycle);
    if (!updatedMotorcycle) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(updatedMotorcycle);
  }
}

export default MotorcyclesController;