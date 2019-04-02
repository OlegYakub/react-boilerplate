import { createRequestTypes } from '../../service/utils';
import Api from '../../service/api';

export const EXAMPLE_ACTION = createRequestTypes('EXAMPLE_ACTION');
export const exampleAction = {
  request: payload => ({
    type: EXAMPLE_ACTION.REQUEST,
    payload: {...payload, status: Api.requestStatus},
  }),
  success: data => ({
    type: EXAMPLE_ACTION.SUCCESS,
    payload: {...data, status: Api.successStatus},
  }),
  failure: error => ({
    type: EXAMPLE_ACTION.FAILURE,
    payload: {...error, status: Api.failStatus},
  }),
};

export const SIMPLE_EXAMPLE_ACTION = 'SIMPLE_EXAMPLE_ACTION';
export const simpleExampleAction = () => ({
  type: SIMPLE_EXAMPLE_ACTION,
});
