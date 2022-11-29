import { all, call } from 'redux-saga/effects';
import movieSaga from './movie/saga';
import favoriteSaga from './movie/favoriteSaga';
import listSaga from './movie/listSaga';

function* rootSaga() {
  yield all([call(movieSaga), call(favoriteSaga), call(listSaga)]);
}

export default rootSaga;
