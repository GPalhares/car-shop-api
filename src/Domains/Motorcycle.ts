import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  
  constructor(motorcycleInfo: IMotorcycle) {
    super(motorcycleInfo);
    this.category = motorcycleInfo.category;
    this.engineCapacity = motorcycleInfo.engineCapacity;
  }
  
  public getCategory(): string {
    return this.category;
  }

  public setCategory(category: string) {
    this.category = category;
  }
  
  public getEngineCapacityQty(): number {
    return this.engineCapacity;
  }

  public setEngineCapacityQty(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;
