import axios from 'axios';
import Config from '../config/config';
import { CategoryModel } from '../models';

const URL = `${Config.api}category`;

export class CategoryService {

  public getAllCategories():Promise<any>{
    return axios.get(URL);
  }

  public createCategory(category:CategoryModel):Promise<any>{
    return axios.post(URL,category);
  }

}
