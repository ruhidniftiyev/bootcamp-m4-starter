import React from 'react';
import FavoritesButton from '../FavoritesButton/FavoritesButton';
import SearchBox from '../SearchBox/SearchBox';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">MustSee</h1>
      <div className="main-page__search-box">
        <SearchBox />
      </div>
      <div className="header__favorites-btn-block">
        <FavoritesButton/>
      </div>
    </header>
  );
};

export default Header;
