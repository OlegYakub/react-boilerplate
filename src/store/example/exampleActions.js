import action, {
  createRequestActionTypes,
  REQUEST, SUCCESS, FAILURE,
} from '../../helpers/action';

export const actionTypes = {
  ...createRequestActionTypes('EXAMPLE', {
    GET: 'GET',
    SET: 'SET',
  }),
};

export const getExampleData = {
  request: () => action(actionTypes.GET[REQUEST]),
  success: payload => action(actionTypes.GET[SUCCESS], {payload}),
  failure: () => action(actionTypes.GET[FAILURE]),
};

export const setExampleData = {
  request: (data, onSuccess) => action(actionTypes.SET[REQUEST], {data, onSuccess}),
  success: payload => action(actionTypes.SET[SUCCESS], {payload}),
  failure: () => action(actionTypes.SET[FAILURE]),
};
