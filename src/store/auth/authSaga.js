import { call, put, take } from 'redux-saga/effects';
import { actionTypes } from './authActions';
import * as actions from './authActions';
import {showAlert} from '../alert/alertActions';
import Api from "../../service/api";
import {filterActionsForRequest} from '../../helpers';

const {LOGIN, REGISTRATION} = actionTypes;

/***************************** Sagas ************************************/

function* loginSaga() {
  while (true) {
    const {data} = yield take(LOGIN.REQUEST);
    try {
      const response = yield call(Api.post, 'login/', data);
      if (response.access_token) {
        yield put(actions.login.success(response));
      } else {
        yield put(showAlert({title: 'Error', msg: 'Member name or password is wrong'}));
      }
    } catch (e) {
      yield put(showAlert({title: 'Error', msg: 'Member name or password is wrong'}));
    }
  }
}

function* registrationSaga() {
  while (true) {
    const {data, onSuccess} = yield take(REGISTRATION.REQUEST);

    try {
      const response = yield call(Api.post, 'registration/', data);
      if (response.status) {
        if (response.result && response.result.token_details) {
          yield put(actions.registration.success(response.result.token_details));
          onSuccess && onSuccess();
          return;
        }
      }
    } catch (e) {
      const errors = Object.values(e.response.data.errors);
      if (errors.length) {
        yield put(showAlert({title: 'Error', msg: errors[0]}));
      } else {
        yield put(showAlert({title: 'Error', msg: 'Something wrong with connection'}));
      }
      //yield put(actions.registration.failure(e));
    }
  }
}

function* rememberLastTenActions() {
  while (true) {
    const action = yield take('*');
    const targetAction = yield call(filterActionsForRequest, action.type);
    if (targetAction) {
      const [sameAction] = Api.actionsStack.filter(item => item.type === action.type);
      if (!sameAction) {
        if (Api.actionsStack.length === 10) {
          Api.actionsStack.shift();
        }
        Api.actionsStack.push(action);
      }
    }
  }
}

export default [
  loginSaga,
  registrationSaga,
  rememberLastTenActions,
];
