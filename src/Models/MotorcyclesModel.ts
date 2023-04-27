import mongoose, { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class CarsModel extends AbstractODM<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toHexString(),
      },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { versionKey: false });

    super(schema, 'cars');
  }
}

export default CarsModel;
