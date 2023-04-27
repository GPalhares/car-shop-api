import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

class CarsService {
  async createCar(car: ICar) {
    if (car) {
      const carsModel = new CarsModel();
      const createdNewCar = await carsModel.create(car);
      return createdNewCar;
    }
  }

  async listAllCars() {
    const carsModel = new CarsModel();
    const allCars = await carsModel.findAll();
    return allCars;
  }

  async findCarById(carId: string) {
    const carsModel = new CarsModel();
    const car = await carsModel.findById(carId);
    return car;
  }

  public async updateCarById(id: string, car: ICar): Promise<ICar | null> {
    const carsModel = new CarsModel();
    const updatedCar = await carsModel.update(id, car);
    if (!updatedCar) {
      return null;
    }
    return updatedCar;
  }
}

export default CarsService;
