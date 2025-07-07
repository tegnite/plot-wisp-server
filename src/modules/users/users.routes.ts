import { Router } from 'express';
import {User_Controller} from "@app/modules/users/users.controller";

const user_routes = Router();

user_routes.get('', User_Controller.find_users);

export default user_routes;
