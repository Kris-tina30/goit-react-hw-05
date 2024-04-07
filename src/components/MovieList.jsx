import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Tradding today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.original_title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
