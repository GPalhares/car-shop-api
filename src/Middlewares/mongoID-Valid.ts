import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

const validateMongoId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(422).json({ message: 'Invalid mongo id' });
  }
  
  return next();
};

export default validateMongoId;