import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from '../pages/MovieDetails.module.css';

const MovieInfo = ({ movieDetails }) => {
  const location = useLocation();
  const from = location.state?.from || '/';
  if (movieDetails) {
    const { title, overview, genres, vote_average, poster_path } = movieDetails;

    const genre = genres.map(genre => genre.name).join(', ');
    const userScore = vote_average.toFixed(1);

    return (
      <>
        <div className={css.infoCard}>
          <div>
            <img
              className={css.infoImg}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </div>
          <div className={css.infoData}>
            <h2>{title}</h2>
            <p>User Score: {userScore} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genre}</p>
          </div>
        </div>
        <div className={css.infoDetails}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast" state={{ from }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from }}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </>
    );
  }
};

export default MovieInfo;
