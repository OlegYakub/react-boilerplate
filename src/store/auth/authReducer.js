import {actionTypes} from './authActions';
import {SUCCESS, REQUEST} from '../../utils/action';

const {
  LOGIN,
  LOGOUT,
  REGISTRATION,
} = actionTypes;

const initialState = {
  tokenLoading: false,
  token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')): null,
};

export default function auth(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case LOGIN[REQUEST]:
    case REGISTRATION[REQUEST]:
      return {
        ...state,
        tokenLoading: true,
      };
    case REGISTRATION[SUCCESS]:
    case LOGIN[SUCCESS]:
      localStorage.setItem('token', JSON.stringify(payload));
      return {
        ...state,
        token: payload,
        tokenLoading: false,
      };

    case LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        tokenLoading: false,
      };
    }

    default:
      return state;
  }
}

