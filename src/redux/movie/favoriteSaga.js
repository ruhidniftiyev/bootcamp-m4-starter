import { call, put, select, takeEvery } from 'redux-saga/effects';
import { postMovie } from '../Axios';
import { ADD_LIST, POST_MOVIE } from '../constants';
import { getIdAction } from './actions';
import { getListItem } from './selectors';

function* favoritesWorker(action) {
  try {
    yield put({ type: ADD_LIST, payload: action.payload });
    const data = yield select(getListItem);
    const postData = yield call(postMovie, data);
    yield put(getIdAction(postData.id));
  } catch (err) {
    console.log('ERROR', err);
  }
}

export default function* favoritesWatcher() {
  yield takeEvery(POST_MOVIE, favoritesWorker);
}
