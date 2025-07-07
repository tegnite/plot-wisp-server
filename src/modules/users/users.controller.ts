import {catch_async} from "@app/utils/catch-async.util";
import {Request, Response} from "express";
import {User_Service} from "@app/modules/users/users.service";
import {send_success_response} from "@app/utils/response.util";

export const User_Controller = {
    find_users : catch_async(async (req : Request, res : Response) => {
        const users = await User_Service.find_users();
        send_success_response(res, users, {status_code : 200, message : 'found users'});
    })
}


