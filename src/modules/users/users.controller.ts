import { Request, Response } from 'express';
import user_service from "@app/modules/users/users.service";
import { send_success_response } from '@app/utils/response.util';
import { catch_async } from '@app/utils/catch-async.util';
import {User_Create_DTO, User_Login_DTO} from "@app/modules/users/users.types";

const user_controller = {
    register : catch_async(async (req: Request, res: Response) => {
        const user = await user_service.create_user(req.body as User_Create_DTO);
        send_success_response(res, user, { status_code: 201, message: 'User registered successfully' });
    }),

    login : catch_async(async (req: Request, res: Response) => {
        const user = await user_service.login_user(req.body as User_Login_DTO);
        send_success_response(res, user, { status_code: 200, message: 'User login successfully' });
    })
}

export default user_controller;
