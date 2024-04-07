import React from 'react';
import { useEffect, useState } from 'react';
// import { Routes, Route, Link, NavLink } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { requestTrendingMovie } from '../components/services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await requestTrendingMovie();
        setMovies(response.results);
        console.log(response.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
      {/* <Outlet /> */}
    </div>
  );
};

export default HomePage;
