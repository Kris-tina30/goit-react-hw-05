import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h3>NotFoundPage</h3>
      <Link to="/"> HomePage </Link>
    </div>
  );
}

export default NotFoundPage