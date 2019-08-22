import axios from 'axios';
const API_ROOT = 'https://pokeapi.co/api/v2';

class Repository {
  getMenuLinks() {
    return axios.get(`${API_ROOT}/`).then(response => response);
  };
}

export default new Repository();
