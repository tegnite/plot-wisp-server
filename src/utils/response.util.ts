import { Response } from 'express';

interface Success_Response_Options {
    status_code?: number;
    message?: string;
}

export const send_success_response = <T>(res: Response, data: T, options?: Success_Response_Options) => {
    const status_code = options?.status_code || 200;
    const message = options?.message || 'Operation successful';

    res.status(status_code).json({
        data,
        status: 'success',
        message,
    });
};
