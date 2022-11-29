import {
  SEARCH_MOVIE,
  ADD_MOVIE,
  SHOW_MODAL,
  HIDE_MODAL,
  DELETE_MOVIE,
  ADD_LIST,
  GET_ID,
} from '../constants';

const initialState = {
  moviesArray: [],
  favoriteMovies: [],
  activeValue: false,
  listItems: {},
  listSended: false,
  listId: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, moviesArray: action.payload };
    case ADD_MOVIE:
      const findItem = state.favoriteMovies.some((movie) => movie.imdbID === action.payload.imdbID);
      return findItem
        ? state
        : { ...state, favoriteMovies: [...state.favoriteMovies, action.payload] };
    case DELETE_MOVIE:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter((movie) => movie.imdbID !== action.payload),
      };
    case SHOW_MODAL:
      return { ...state, activeValue: true };
    case HIDE_MODAL:
      return { ...state, activeValue: false };
    case ADD_LIST:
      return { ...state, listItems: action.payload, listSended: true };
    case GET_ID:
      console.log(action.payload);
      return { ...state, listId: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
