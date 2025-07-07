import { Request, Response, NextFunction } from 'express';

type Async_Function = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const catch_async =
    (fn: Async_Function) => {
        return (req: Request, res: Response, next: NextFunction) => {
            fn(req, res, next).catch(next);
        };
    }
;
