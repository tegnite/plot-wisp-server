import {User_Create_DTO, User_Interface} from "@app/modules/users/users.types";
import {User_Model} from "@app/modules/users/users.model";

export const Auth_Repository = {
    async create_user_in_db (user_data : User_Create_DTO) : Promise<User_Interface> {
        const new_user = new User_Model(user_data);
        return await new_user.save();
    },
}
