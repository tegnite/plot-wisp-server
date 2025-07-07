import { Document } from 'mongoose';

export interface Base_Interface extends Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
