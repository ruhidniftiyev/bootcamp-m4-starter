import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovieAction, hideModalAction, postListAction } from '../../redux/movie/actions';
import { getFavoriteMovies, getListId } from '../../redux/movie/selectors';
import './FavoritesModal.css';

const FavoritesModal = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(getFavoriteMovies);
  const listSended = useSelector((state) => state.movieReducer.listSended);

  const handleAddList = () => {
    dispatch(postListAction({ title, movies: [...favoriteMovies.map((movie) => movie.imdbID)] }));
  };

  const hideModal = () => {
    dispatch(hideModalAction());
  };
  const deleteMovie = (id) => {
    console.log(id);
    dispatch(deleteMovieAction(id));
  };

  const id = useSelector(getListId);
  let link = `/list/${id}`;

  return (
    <div className="favorites-modal">
      <div className="favorites-modal__content">
        <span onClick={() => hideModal()} className="material-symbols-outlined close">
          close
        </span>
        <input
          value={listSended ? '' : title}
          placeholder="Введите название списка"
          onChange={(e) => setTitle(e.target.value)}
          className="favorites__name"
          disabled={listSended}
        />
        <ul className="favorites__list">
          {favoriteMovies?.map((item) => (
            <div key={item.imdbID}>
              <li key={item.imdbID}>
                {item.Title} ({item.Year}){' '}
                <span
                  key={item.imdbID}
                  onClick={listSended ? ()=>{} : () => deleteMovie(item.imdbID)}
                  className="material-symbols-outlined delete">
                  close
                </span>
              </li>
            </div>
          ))}
        </ul>
        {listSended ? (
          <Link to={link}>Перейти к списку</Link>
        ) : (
          <button
            onClick={() => handleAddList()}
            type="button"
            className={
              title && favoriteMovies.length > 0 ? 'favorites__save' : 'favorites__save disabled'
            }
            disabled={title && favoriteMovies.length > 0 ? false : true}>
            Сохранить список
          </button>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;