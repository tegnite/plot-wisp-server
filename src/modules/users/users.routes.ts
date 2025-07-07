import { Router } from 'express';
import { register_user } from '@app/modules/users/users.controller';

const user_routes = Router();

user_routes.post('/register', register_user);

export default user_routes;
