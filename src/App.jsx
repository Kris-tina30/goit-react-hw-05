import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import Loader from './components/Loader';
import HeaderNav from './components/HeaderNav';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const Cast = lazy(() => import('./components/MovieCast'));
const Reviews = lazy(() => import('./components/MovieReviews'));

function App() {
  return (
    <div>
      <HeaderNav />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>

            <Route path="/movies" element={<MoviesPage />}></Route>

            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
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
