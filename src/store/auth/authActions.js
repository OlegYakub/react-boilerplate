import action, {
  createRequestActionTypes,
  REQUEST, SUCCESS, FAILURE,
} from '../../helpers/action';

export const actionTypes = {
  ...createRequestActionTypes('AUTH', {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTRATION: 'REGISTRATION',
  }),
};

export const logout = () => action(actionTypes.LOGOUT);

export const login = {
  request: data => action(actionTypes.LOGIN[REQUEST], {data}),
  success: payload => action(actionTypes.LOGIN[SUCCESS], {payload}),
  failure: () => action(actionTypes.LOGIN[FAILURE]),
};

export const registration = {
  request: (data, onSuccess) => action(actionTypes.REGISTRATION[REQUEST], {data, onSuccess}),
  verification: data => action(actionTypes.VERIFICATION, {data}),
  success: payload => action(actionTypes.REGISTRATION[SUCCESS], {payload}),
  failure: () => action(actionTypes.REGISTRATION[FAILURE]),
};
