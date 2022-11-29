import React from 'react';
import { useSelector } from 'react-redux';
import { getMoviesArray } from '../../redux/movie/selectors';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = () => {
    const moviesArray = useSelector(getMoviesArray)

        return ( 
            <ul className="movies">
                {moviesArray?.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} key={movie.id} />
                    </li>
                ))}
            </ul>
        );
    }
 
export default Movies;