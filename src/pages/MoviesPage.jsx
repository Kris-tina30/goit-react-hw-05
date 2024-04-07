import React from 'react';
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <div>
      <h1>MoviesPage</h1>
      <ul>
        <li>
          <Link to="MovieList">Read about our mission</Link>
        </li>
      </ul>
      {/* <Outlet /> */}
    </div>
  );
}

export default MoviesPage