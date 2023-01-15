import axios from 'axios';
const API_KEY = 'c44487c03ffebabedae8b57076099ca1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const getSearchMovies = async () =>{
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
  return response.data;
}

export const getMovieById = async (id) => {
     const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
}
  
export const getMovieCredits = async (id) => {
     const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export const getMovieReviews = async (id) => {
     const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
}

