import axios from 'axios';
let url = 'http://localhost:8080/games';

const gameServices = {
  getAll(){
    return axios.get(url)
    .then((res) => res.data)
    
  }
}

export default gameServices;