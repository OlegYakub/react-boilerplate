import { all, fork, setContext } from 'redux-saga/effects';
import exampleSaga from '../example/exampleSaga';

export default function* root(dispatch) {
  yield setContext({dispatch});
  yield all([
    ...exampleSaga,
  ].map(saga => fork(saga, dispatch)));
}
