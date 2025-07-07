import { Request, Response } from 'express';
import { create_user } from '@app/modules/users/users.service';

export const register_user = async (req: Request, res: Response) => {
    const user = await create_user(req.body);
    res.status(201).json(user);
};
