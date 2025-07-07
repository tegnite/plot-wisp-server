import { Router } from 'express';
import {upload_none} from '@app/config/multer.config';
import {Auth_Controller} from "@app/modules/auth/auth.controller";

const auth_routes = Router();

auth_routes.post('/register', upload_none, Auth_Controller.register);
auth_routes.post('/login', upload_none, Auth_Controller.login);

export default auth_routes;
