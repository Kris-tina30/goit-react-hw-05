import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import clsx from 'clsx';
import css from './HeaderNav.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const HeaderNav = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HeaderNav;
