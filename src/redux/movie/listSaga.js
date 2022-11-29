import { call, select, takeEvery } from 'redux-saga/effects';
import { getIdRequest } from '../Axios';
import { LIST_PAGE } from '../constants';
import { getListId } from './selectors';

function* listPageWorker(action) {
    try {
      const id = yield select(getListId)
      yield call(getIdRequest, id)
  } catch (err) {
    console.log('ERROR', err);
  }
}

export default function* listPageWatcher() {
    yield takeEvery(LIST_PAGE, listPageWorker);
}
