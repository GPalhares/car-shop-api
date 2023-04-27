import { Model, Schema, models,
  model } from 'mongoose';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    const allObjects = await this.model.find({});
    return allObjects;
  }

  public async findById(id: string): Promise<T | null> {
    const object = await this.model.findById({ _id: id });
    return object;
  }
}
  
export default AbstractODM;