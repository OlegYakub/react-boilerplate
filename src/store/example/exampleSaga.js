import { call, put, take } from 'redux-saga/effects';
import { actionTypes } from './exampleActions';
import * as actions from './exampleActions';
import Api from "../../service/api";

const {
  GET, SET,
} = actionTypes;

/***************************** Sagas ************************************/

function* getQuestionsSaga() {
  while (true) {
    yield take(GET.REQUEST);
    try {
      const response = yield call(Api.get, 'example/');
      if (response.status) {
        yield put(actions.getExampleData.success(response.result));
      }
    } catch (e) {
      console.warn('error -> ', e);//eslint-disable-line
    }
  }
}

function* setAnswersSaga() {
  while (true) {
    const {data, onSuccess} = yield take(SET.REQUEST);
    try {
      const response = yield call(Api.put, 'lifestyle/', undefined, data);

      if (response.status) {
        yield put(actions.setExampleData.success());
        onSuccess();
      }
    } catch (e) {
      console.warn('error -> ', e);//eslint-disable-line
    }
  }
}

export default [
  getQuestionsSaga,
  setAnswersSaga,
];
