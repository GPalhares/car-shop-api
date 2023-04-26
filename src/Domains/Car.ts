import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(carInfo: ICar) {
    this.id = carInfo.id;
    this.model = carInfo.model;
    this.year = carInfo.year;
    this.color = carInfo.color;
    this.status = carInfo.status;
    this.buyValue = carInfo.buyValue;
    this.doorsQty = carInfo.doorsQty;
    this.seatsQty = carInfo.seatsQty;
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
  
  public getDoorsQty(doorsQty:number) {
    this.doorsQty = doorsQty;
  }

  public setDoorsQty(): number {
    return this.doorsQty;
  }
  
  public getSeatsQty(): number {
    return this.seatsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}

export default Car;
