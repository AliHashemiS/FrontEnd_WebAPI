import axios from 'axios';
import Config from '../config/config';

const URL = `${Config.api}category`;

export class CategoryService {

  public getAllCategories():Promise<any>{
    return axios.get(URL);
  }

}
