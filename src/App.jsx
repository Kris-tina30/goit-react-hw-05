import { useState } from 'react';

import './App.css';

import { Routes, Route, Link, NavLink } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
// import { requestTrendingMovie } from './components/services/api';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
// import MovieList from './components/MovieList';
// import MovieCast from './components/MovieCast';
// import MovieReviews from './components/MovieReviews';

//  import HomePage from 'path/to/pages/HomePage';
//  import MoviesPage from 'path/to/pages/MoviesPage';
//  import MovieDetailsPage from 'path/to/pages/MovieDetailsPage';
// import NotFoundPage from 'path/to/pages/NotFoundPage';
// import MovieCast from 'path/to/components/MovieCast';
// import MovieReviews from 'path/to/components/MovieReviews';
// import MovieList from 'path/to/components/MovieList';


function App() {


  return (
    <div>
      <header>
        <nav>
          <NavLink to="/"> HomePage </NavLink>
          <NavLink to="/movies-page"> MoviesPage </NavLink>
          <NavLink to="/movie-details-page"> MovieDetailsPage </NavLink>
        </nav>
      </header>
      <main>
         <Routes> 
        <Route path="/" element={<HomePage/>}>
          {/* <Route path="MovieList" element={<MovieList />} /> */}
        </Route>

        <Route path="/movies-page" element={<MoviesPage/>}>
          {/* <Route path="'/movies" element={<MovieList />} /> */}
        </Route>
        
        <Route path="/movie-details-page" element={<MovieDetailsPage/>}>
          {/* <Route path="/movies/:movieId/cast" element={<MovieCast/>} />
          <Route path="movies/:movieId/reviews" element={<MovieReviews />} /> */}
        </Route>


        <Route path="*" element={<NotFoundPage />} /> 
      </Routes> 
      </main>
    </div>
  );
}

export default App;
// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
// /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
// Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.
  // Trending movies - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
  // Search movie - пошук фільму за ключовим словом на сторінці фільмів.
  // Movie details - запит повної інформації про фільм для сторінки кінофільму.
  // Movie credits - запит інформації про акторський склад для сторінки кінофільму.
  //  Movie reviews - запит оглядів для сторінки кінофільму.
  // Файли компонентів сторінок, таких як HomePage, MoviesPage, MovieDetailsPage, NotFoundPage, повинні бути в папці src/pages.
// Компоненти MovieCast і MovieReviews не є окремими сторінками, вони є лише частинами сторінки MovieDetailsPage, тому файли цих компонентів зберігаємо в src/components.
// Меню з навігаційними посиланнями перенесіть в компонент Navigation. Він складається з двох компонентів NavLink, які вказують на маршрути / і /movies.
// Для відображення списку фільмів створіть компонент MovieList. Використовуйте його на сторінках HomePage і MoviesPage.
