import './_searchbar.scss';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit, searchName }) => {
  return (
    <header className="Searchbar">
      <form onSubmit={onSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <BsSearch />
        </button>
        <input
          name="searchBarInput"
          className="SearchForm-input"
          type="text"
          // autoComplete="off"
          // autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
