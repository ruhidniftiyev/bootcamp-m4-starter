import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModalAction } from '../../redux/movie/actions';
import { getFavoriteMovies } from '../../redux/movie/selectors';
import './FavoritesButton.css';

const FavoritesButton = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(getFavoriteMovies);
  let moviesCount = favoriteMovies.length;

  return (
    <div className="header__favotites-button-block">
      <div onClick={() => dispatch(showModalAction())} className="header__favorites-button">
        <span className="material-symbols-outlined heart">favorite</span>
      </div>
          {moviesCount > 0 && <div className="favorite-button__count">{moviesCount}</div>}
    </div>
  );
};

export default FavoritesButton;
