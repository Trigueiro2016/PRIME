
import axios from 'axios';


//Base da URL: https://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=7fa6edd1261effec2ddd04f3e25adff8&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
