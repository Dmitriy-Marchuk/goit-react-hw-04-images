import './_searchbar.scss';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleInput = e => {
    setSearchName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      return toast.error(`Wrong request! Write something!`);
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <BsSearch />
        </button>
        <input
          onChange={handleInput}
          value={searchName}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
