import Vehicle from './Vehicle';
import ICar from '../Interfaces/ICar';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(carInfo: ICar) {
    super(carInfo);
    this.doorsQty = carInfo.doorsQty;
    this.seatsQty = carInfo.seatsQty;
  }
  
  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }
  
  public getSeatsQty(): number {
    return this.seatsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}

export default Car;
