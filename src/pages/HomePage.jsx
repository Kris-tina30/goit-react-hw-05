import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';
import { getTrendingMovies } from '../components/services/api';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log('error:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className={css.list}>
      <h1 className={css.title}>Tradding today</h1>
      {isLoading && <Loader />}
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default HomePage;
