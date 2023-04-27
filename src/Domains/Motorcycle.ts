import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;
  
  constructor(motocycleInfo: IMotorcycle) {
    this.id = motocycleInfo.id;
    this.model = motocycleInfo.model;
    this.year = motocycleInfo.year;
    this.color = motocycleInfo.color;
    this.status = motocycleInfo.status;
    this.buyValue = motocycleInfo.buyValue;
    this.category = motocycleInfo.category;
    this.engineCapacity = motocycleInfo.engineCapacity;
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
  
  public getcategory(category:string) {
    this.category = category;
  }

  public setcategory(): string {
    return this.category;
  }
  
  public getengineCapacityQty(): number {
    return this.engineCapacity;
  }

  public setengineCapacityQty(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;
