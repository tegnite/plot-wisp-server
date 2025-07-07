import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { catch_async } from '@app/utils/catch-async.util';
import {get_env} from "@app/config/env.config";

export const auth_middleware = catch_async(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        req.user_id = null;
        next();
    } else {
        const jwt_secret = get_env('JWT_SECRET');
        const decoded = jwt.verify(token, jwt_secret) as { id: string };
        req.user_id = decoded.id;
        next();
    }

});
