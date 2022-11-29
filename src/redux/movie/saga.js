import { call, put, takeEvery } from 'redux-saga/effects';
import fetchMoviesData from '../Axios';
import { SEARCH_MOVIE, FETCH_MOVIE } from '../constants';

function* sagaWorker(action) {
  try {
    console.log(action.payload);
    const payload = yield call(fetchMoviesData, action.payload);
    yield put({ type: SEARCH_MOVIE, payload: payload.Search });
    // const state = yield select(getListItem)
    // console.log(state);
  } catch (err) {
    console.log('ERROR', err);
  }
}

export default function* sagaWatcher() {
  yield takeEvery(FETCH_MOVIE, sagaWorker);
}
