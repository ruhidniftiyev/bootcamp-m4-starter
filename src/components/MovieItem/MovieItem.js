import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../../redux/movie/actions';
import './MovieItem.css';

const MovieItem = ({ Title, Year, Poster, imdbID }) => {
    const dispatch = useDispatch()

    const handleAddClick = () => {
        console.log(1236);
        dispatch(addMovieAction({Title, Year, imdbID}))
    }

  return (
    <article className="movie-item">
      {Poster === 'N/A' ? (
        <div className="movie-item__no-poster">No poster :(</div>
      ) : (
        <img className="movie-item__poster" src={Poster} alt={Title} />
      )}
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button onClick={()=>handleAddClick()} type="button" className="movie-item__add-button">
          Добавить в список
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
