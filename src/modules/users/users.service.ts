import bcrypt from 'bcryptjs';
import { User_Create_DTO, User_Interface, User_Login_DTO } from '@app/modules/users/users.types';
import user_repository from "@app/modules/users/users.repository";

const user_service = {
   async create_user (user_data: User_Create_DTO) : Promise<User_Interface> {
       if (!user_data.password) {
           throw new Error('Password is required');
       }
       const old_user = await user_repository.find_user_by_username(user_data.username);
       if(old_user) {
           throw new Error('user with this username already exists');
       }
       const salt = await bcrypt.genSalt(10);
       const password_hash = await bcrypt.hash(user_data.password, salt);

       return await user_repository.create_user_in_db({
           ...user_data,
           password : password_hash
       });
   },

   async login_user(user_data: User_Login_DTO) : Promise<User_Interface> {
       const user = await user_repository.find_user_by_username(user_data.username);

       if (!user) {
           throw new Error('user with that username does not exist');
       }

       const is_match = await bcrypt.compare(user_data.password, user.password);

       if (!is_match) {
           throw new Error('invalid password');
       }

       return user;
   }
}

export default user_service;

