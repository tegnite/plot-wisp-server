import { Base_Interface } from '@app/types/base.types';

export const GENDERS = ['male', 'female', 'other'] as const;
export type Gender_Type = typeof GENDERS[number];

export interface User_Interface extends Base_Interface {
  username: string;
  email: string;
  password_hash: string;
  gender: Gender_Type;
}

export type User_Create_DTO = Omit<User_Interface, '_id' | 'createdAt' | 'updatedAt'>;
