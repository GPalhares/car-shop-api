import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

class CarsService {
  async createCar(car:ICar) {
    if (car) {
      const carsModel = new CarsModel();
      const createdNewCar = await carsModel.create(car);
      return createdNewCar;
    }
  }
}

export default CarsService;