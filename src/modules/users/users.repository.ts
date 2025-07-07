import {User_Model} from '@app/modules/users/users.model';
import {User_Create_DTO, User_Interface} from '@app/modules/users/users.types';

const user_repository = {
    async create_user_in_db (user_data : User_Create_DTO) : Promise<User_Interface> {
        const new_user = new User_Model(user_data);
        return await new_user.save();
    },
    async find_user_by_username (username : string) : Promise<User_Interface | null> {
        return User_Model.findOne({username});
    }
}
export default user_repository;
