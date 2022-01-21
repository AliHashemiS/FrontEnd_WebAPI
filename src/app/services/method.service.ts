import axios from 'axios';
import { MethodModel } from '../models';
import Config from '../config/config';

const URL = `${Config.api}method`;

export class MethodService {

  public createMethod(data:MethodModel):Promise<any>{
    return axios.post(`${URL}`,data);
  }

  public getAllMethod():Promise<any>{
    return axios.get(URL);
  }

  public getMethodUserName(data:any):Promise<any>{
    return axios.get(`${URL}/findWithFilter`,{params:data});
  }

}
