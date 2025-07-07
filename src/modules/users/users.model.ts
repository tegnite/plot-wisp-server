import { Schema, model } from 'mongoose';
import { User_Interface, GENDERS } from '@app/modules/users/users.types';

const user_schema = new Schema<User_Interface>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    gender: { type: String, enum: GENDERS, required: true },
}, { timestamps: true });

export const User_Model = model<User_Interface>('User', user_schema);
