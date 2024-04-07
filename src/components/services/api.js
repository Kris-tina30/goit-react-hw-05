import axios from 'axios';
// import { useNavigate, useState } from 'react-router-dom';

const BASE_URL = `https://api.themoviedb.org`;
const API_KEY = `16a631fb938e75b5b95a257339c6cb10`;
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmE2MzFmYjkzOGU3NWI1Yjk1YTI1NzMzOWM2Y2IxMCIsInN1YiI6IjY2MTAxODJlNzRkNmMwMDE3Y2Q5YzYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIWS9t0bM_mg1cIeXDhlb25vOIi3vJMtIfVc2PDspCs`;






export const requestTrendingMovie = async () => {const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmE2MzFmYjkzOGU3NWI1Yjk1YTI1NzMzOWM2Y2IxMCIsInN1YiI6IjY2MTAxODJlNzRkNmMwMDE3Y2Q5YzYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIWS9t0bM_mg1cIeXDhlb25vOIi3vJMtIfVc2PDspCs',
    },

};
  const { response } = await axios.get(url, options
  );

    return( response.results);
    
};

// console.log(response);


