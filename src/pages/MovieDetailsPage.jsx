import React from 'react';
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <div>
      <h1>MovieDetailsPage</h1>
      <ul>
        <li>
          <Link to="MovieCast">Read about our mission</Link>
        </li>
        <li>
          <Link to="MovieReviews">Get to know the team</Link>
        </li>
      </ul>
      {/* <Outlet /> */}
    </div>
  );
};

export default MovieDetailsPage;
