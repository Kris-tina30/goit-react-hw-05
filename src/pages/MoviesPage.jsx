import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMoviesByQuery } from '../components/services/api';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const MoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const searchInput = searchMovies => {
    if (query === searchMovies) {
      return;
    }
    setSearchParams({ query: searchMovies });
    setMovies([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchMovieByQuery() {
      try {
        const data = await getMoviesByQuery(query);

        setMovies(movies => [...movies, ...data.results]);
      } catch (error) {
        console.log('error:', error);
      }
    }

    fetchMovieByQuery();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={searchInput} />

      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default MoviesPage;
