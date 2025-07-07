import { Base_Interface } from '@app/types/base.types';

export const GENDERS = ['male', 'female', 'other'] as const;
export type Gender_Type = typeof GENDERS[number];

export interface User_Interface extends Base_Interface {
    username: string;
    email?: string;
    password: string;
    gender: Gender_Type;
    description?: string;
    birthday?: Date;
    profile_picture?: string;
    cover_picture?: string;
}

export interface User_Create_DTO {
    username: string;
    password: string;
    gender: Gender_Type;
}

export interface User_Login_DTO {
    username: string;
    password: string;
}
