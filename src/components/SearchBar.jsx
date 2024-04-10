import React from 'react';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (e.searchMovie === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          value={searchMovie}
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={e => setSearchMovie(e.target.value)}
        />{' '}
        <button className={css.searchButton} type="submit">
          <span>
            <FcSearch className={css.icon} />
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
