import {Request, Response} from "express";

import {catch_async} from "@app/utils/catch-async.util";
import {User_Create_DTO, User_Login_DTO} from "@app/modules/users/users.types";
import {send_success_response} from "@app/utils/response.util";
import {Auth_Service} from "@app/modules/auth/auth.service";

export const Auth_Controller = {
    me : catch_async(async (req: Request, res: Response) => {
        const user_id = req.user_id;
        const {me, token} = await Auth_Service.get_me(user_id);
        set_token_to_cookie(res, token);
        send_success_response(res, me, { status_code: 201, message: 'User authorized successfully from cookie token', token });
    }),
    register : catch_async(async (req: Request, res: Response) => {
        const { user, token } = await Auth_Service.register_user(req.body as User_Create_DTO);
        set_token_to_cookie(res, token);
        send_success_response(res, user, { status_code: 201, message: 'User registered successfully', token });
    }),

    login : catch_async(async (req: Request, res: Response) => {
        const { user, token } = await Auth_Service.login_user(req.body as User_Login_DTO);
        set_token_to_cookie(res, token);
        send_success_response(res, user, { status_code: 200, message: 'User login successfully', token });
    })
}

function set_token_to_cookie(res : Response, token : string) {
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000 // 1 hour
    });
}
