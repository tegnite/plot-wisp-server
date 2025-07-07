import bcrypt from 'bcryptjs';
import { User_Model } from '@app/modules/users/users.model';
import { User_Create_DTO, User_Interface } from '@app/modules/users/users.types';

export const create_user = async (user_data: User_Create_DTO): Promise<User_Interface> => {
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(user_data.password, salt);

    const new_user = new User_Model({
        ...user_data,
        password_hash,
    });

    return await new_user.save();
};
