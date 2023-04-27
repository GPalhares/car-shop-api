import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesModel from '../Models/MotorcyclesModel';

class MotorcyclesService {
  async createMotorcycle(motorcycle: IMotorcycles) {
    if (motorcycle) {
      const motorcyclesModel = new MotorcyclesModel();
      const createdNewMotorcycle = await motorcyclesModel.create(motorcycle);
      return createdNewMotorcycle;
    }
  }

  async listAllMotorcycle() {
    const motorcyclesModel = new MotorcyclesModel();
    const allMotorcycle = await motorcyclesModel.findAll();
    return allMotorcycle;
  }

  async findMotorcycleById(carId: string) {
    const motorcyclesModel = new MotorcyclesModel();
    const car = await motorcyclesModel.findById(carId);
    return car;
  }

  public async updateMotorcycleById(id: string, car: IMotorcycles): Promise<IMotorcycles | null> {
    const motorcyclesModel = new MotorcyclesModel();
    const updatedMotorcycle = await motorcyclesModel.update(id, car);
    if (!updatedMotorcycle) {
      return null;
    }
    return updatedMotorcycle;
  }
}

export default MotorcyclesService;
