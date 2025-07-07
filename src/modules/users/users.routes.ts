import { Router } from 'express';
import { register_user } from '@app/modules/users/users.controller';
import {upload_none} from '@app/config/multer.config';

const user_routes = Router();

user_routes.post('/register', upload_none, register_user);

export default user_routes;
