import {
  ADD_LIST,
  ADD_MOVIE,
  DELETE_MOVIE,
  FETCH_MOVIE,
  GET_ID,
  HIDE_MODAL,
  LIST_PAGE,
  POST_MOVIE,
  SEARCH_MOVIE,
  SHOW_MODAL,
} from '../constants';

export const searchMovieAction = (data) => ({
  type: SEARCH_MOVIE,
  payload: data,
});

export const fetchMovieAction = (movieName) => ({
  type: FETCH_MOVIE,
  payload: movieName,
});

export const addMovieAction = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const showModalAction = () => ({
  type: SHOW_MODAL,
});

export const hideModalAction = () => ({
  type: HIDE_MODAL,
});

export const deleteMovieAction = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});

export const addListAction = (list) => ({
  type: ADD_LIST,
  payload: list,
});

export const postListAction = (data) => ({
  type: POST_MOVIE,
  payload: data,
});

export const listPageAction = () => ({
  type: LIST_PAGE,
});

export const getIdAction = (id) => ({
  type: GET_ID,
  payload: id,
});
