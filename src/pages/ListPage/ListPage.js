import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPageAction } from '../../redux/movie/actions';
import { getFavoriteMovies } from '../../redux/movie/selectors';
import './ListPage.css';

const ListPage = () => {
    const movies = useSelector(getFavoriteMovies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listPageAction())
    })

        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
 
export default ListPage;