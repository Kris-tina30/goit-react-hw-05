import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmE2MzFmYjkzOGU3NWI1Yjk1YTI1NzMzOWM2Y2IxMCIsInN1YiI6IjY2MTAxODJlNzRkNmMwMDE3Y2Q5YzYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIWS9t0bM_mg1cIeXDhlb25vOIi3vJMtIfVc2PDspCs',
};
axios.defaults.params = {
  language: 'en-US',
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/day');

  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: query,
    },
  });

  return data;
};

export const getMoviesById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);

  return data;
};
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);

  return data.results;
};
