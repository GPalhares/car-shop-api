interface ICar {
  id?: string;
  _id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}
  
export default ICar;