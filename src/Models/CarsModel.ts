import mongoose, { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarsModel extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toHexString(),
      },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, { versionKey: false });

    super(schema, 'cars');
  }
}

export default CarsModel;
