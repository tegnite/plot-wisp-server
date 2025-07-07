import {User_Create_DTO, User_Interface, User_Login_DTO} from "@app/modules/users/users.types";
import {get_env} from "@app/config/env.config";
import jwt from "jsonwebtoken";
import {User_Repository} from "@app/modules/users/users.repository";
import bcrypt from "bcryptjs";
import {Auth_Repository} from "@app/modules/auth/auth.respository";

export const Auth_Service = {
    async register_user (user_data: User_Create_DTO) : Promise<{user : User_Interface, token : string}> {
        if (!user_data.password) {
            throw new Error('Password is required');
        }
        const old_user = await User_Repository.find_user_by_username(user_data.username);
        if(old_user) {
            throw new Error('user with this username already exists');
        }
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(user_data.password, salt);

        const user = await Auth_Repository.create_user_in_db({
            ...user_data,
            password : password_hash
        });
        const token = get_token_from_user(user);
        return { user, token }
    },

    async login_user(user_data: User_Login_DTO) : Promise<{user : User_Interface, token : string}> {
        const user = await User_Repository.find_user_by_username(user_data.username);

        if (!user) {
            throw new Error('user with that username does not exist');
        }

        const is_match = await bcrypt.compare(user_data.password, user.password);

        if (!is_match) {
            throw new Error('invalid password');
        }

        const token = get_token_from_user(user);
        return { user, token };
    }
}




function get_token_from_user(user_data : User_Interface) : string {
    const jwt_secret = get_env('JWT_SECRET');
    return jwt.sign({ id: user_data._id }, jwt_secret, { expiresIn: '1h' });
}
