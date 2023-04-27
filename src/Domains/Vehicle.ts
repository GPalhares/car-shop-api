import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  
  constructor(vehicleInfo: IVehicle) {
    this.id = vehicleInfo.id;
    this.model = vehicleInfo.model;
    this.year = vehicleInfo.year;
    this.color = vehicleInfo.color;
    this.status = vehicleInfo.status;
    this.buyValue = vehicleInfo.buyValue;
  }
  
  public getId() {
    return this.id;
  }

  public setId(id:string) {
    this.id = id;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(model:string) {
    this.model = model;
  }
  
  public getYear(): number {
    return this.year;
  }

  public setYear(year: number) {
    this.year = year;
  }
  
  public getColor(): string {
    return this.color;
  }

  public setColor(color : string) {
    this.color = color;
  }
  
  public getStatus(): boolean | undefined {
    return this.status;
  }
  
  public setStatus(status: boolean): void {
    this.status = status;
  }
  
  public getBuyValue(): number {
    return this.buyValue;
  }

  public setBuyValue(buyValue : number) {
    this.buyValue = buyValue;
  }
}

export default Vehicle;
