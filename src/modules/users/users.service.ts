import {User_Repository} from "@app/modules/users/users.repository";

export const User_Service = {
    async find_users () {
        return await User_Repository.find_users();
    }
}



