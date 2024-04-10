import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesById } from '../components/services/api';
import MovieInfo from '../components/MovieInfo';
import css from './MovieDetails.module.css';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchMovieDetails() {
      try {
        const results = await getMoviesById(movieId);
        setMovieDetails(results);
      } catch (error) {
        console.log('error:', error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails !== null && (
        <div>
          <button className={css.goBackButton} onClick={() => navigate(from)}>
            &#129128; Go back
          </button>
          <MovieInfo movieDetails={movieDetails} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
