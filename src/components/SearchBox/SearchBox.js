import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovieAction } from '../../redux/movie/actions';
import './SearchBox.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const [searchLine, setSearchLine] = useState('');
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMovieAction(searchLine))
    setSearchLine('')
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={(e) => searchBoxSubmitHandler(e)}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={(e) => setSearchLine(e.target.value)}
          />
        </label>
        <button type="submit" className="search-box__form-submit" disabled={!searchLine}>
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
