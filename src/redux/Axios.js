import axios from 'axios';

async function fetchMoviesData(payload) {
  const response = await axios.get(`https://www.omdbapi.com/?s=${payload}&apikey=5636c888`);
  return response.data;
}

export async function postMovie(data) {
    const response = await axios.post('https://acb-api.algoritmika.org/api/movies/list',  JSON.stringify(data) , {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    });
    
  return response.data
}

export async function getIdRequest(id) {
  const res = await axios.get(`https://acb-api.algoritmika.org/api/movies/list/${id}`);
  return res.data;
}

export default fetchMoviesData;
