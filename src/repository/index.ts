import axios from 'axios';
const API_ROOT = 'https://pokeapi.co/api/v2';

class Repository {
  public getMenuLinks() {
    return axios.get<Promise<Menu.IResponse>>(`${API_ROOT}/`).then(response => response.data);
  };
}

export default new Repository();
