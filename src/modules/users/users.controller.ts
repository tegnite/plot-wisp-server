import { Request, Response } from 'express';
import { create_user } from '@app/modules/users/users.service';
import { send_success_response } from '@app/utils/response.util';
import { catch_async } from '@app/utils/catch-async.util';

export const register_user = catch_async(async (req: Request, res: Response) => {
    const user = await create_user(req.body);
    send_success_response(res, user, { status_code: 201, message: 'User registered successfully' });
});
