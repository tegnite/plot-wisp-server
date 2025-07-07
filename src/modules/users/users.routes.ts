import { Router } from 'express';
import {upload_none} from '@app/config/multer.config';
import user_controller from "@app/modules/users/users.controller";

const user_routes = Router();

user_routes.post('/register', upload_none, user_controller.register);
user_routes.post('/login', upload_none, user_controller.login);

export default user_routes;
