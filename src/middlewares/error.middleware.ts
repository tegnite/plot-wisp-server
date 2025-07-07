import { Request, Response, NextFunction } from 'express';

export const error_middleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    const status_code = err.status_code || 500;
    const message = err.message || 'Something went wrong!';

    res.status(status_code).json({
        status: 'error',
        status_code,
        message,
    });
};
