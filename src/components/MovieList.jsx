import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
