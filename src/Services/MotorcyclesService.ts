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

  async findMotorcycleById(motorcycleID: string) {
    const motorcyclesModel = new MotorcyclesModel();
    const motorcycle = await motorcyclesModel.findById(motorcycleID);
    return motorcycle;
  }

  public async updateMotorcycleById(
    id: string,
    motorcycle: IMotorcycles,
  ): Promise<IMotorcycles | null> {
    const motorcyclesModel = new MotorcyclesModel();
    const updatedMotorcycle = await motorcyclesModel.update(id, motorcycle);
    if (!updatedMotorcycle) {
      return null;
    }
    return updatedMotorcycle;
  }
}

export default MotorcyclesService;
