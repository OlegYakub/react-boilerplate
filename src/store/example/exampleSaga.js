import { all, take, call, put } from 'redux-saga/effects';
import * as actionTypes from './exampleActions';
import Api from '../../service/api';

function* helloRequest() {
  while (true) {
    yield take(actionTypes.EXAMPLE_ACTION.REQUEST);
    try {
      const response = yield call(Api.get, 'sample', {

      });
      if (response.status) {
        yield put(actionTypes.exampleAction.success(response.data.resource));
      } else {
        yield put(actionTypes.exampleAction.failure(response.data));
      }
    } catch (e) {
      yield put(actionTypes.exampleAction.failure(e));
    }
  }
}

export function* exampleSaga() {
  yield all([
    helloRequest(),
  ]);
}
