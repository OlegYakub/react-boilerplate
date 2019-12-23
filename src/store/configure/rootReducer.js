import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import alert from '../alert/alertReducer';
import example from '../example/exampleReducer';

export default history => combineReducers({
  router: connectRouter(history),
  alert,
  example,
});
