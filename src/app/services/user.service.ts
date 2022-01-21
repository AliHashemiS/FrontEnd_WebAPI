import axios from 'axios';
import { UserModel } from '../models';
import Config from '../config/config';

const URL = `${Config.api}user`;

export class UserService {

    public createUser(data:UserModel):Promise<any>{
        return axios.post(`${URL}`,data);
    }

    public getUser(user_email:string, user_password:string):Promise<any>{
        return axios.post(`${URL}/login`,{user_email, user_password});
    }

}
