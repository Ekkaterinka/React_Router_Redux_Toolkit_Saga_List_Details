import { takeLeading, call, put } from 'redux-saga/effects';
import { list, details } from '../api'
import {
  getList,
  getListSuccess,
  getListError
} from './slices/listSlice'

import {
  getDetails,
  getDetailsSuccess,
  getDetailsError
} from './slices/detailsSlice'

function* getListSaga() {
  try {
    const data = yield call(list);
    yield put(getListSuccess(data));
  } catch (Error) {
    yield put(getListError(Error));
  }
}

function* getDetailsSaga(action) {
  try {
    const data = yield call(details, action.payload);
    yield put(getDetailsSuccess(data));
  } catch (err) {
    yield put(getDetailsError(err));
  }
}

export default function* saga() {
  yield takeLeading(getList.type, getListSaga);
  yield takeLeading(getDetails.type, getDetailsSaga);
}

