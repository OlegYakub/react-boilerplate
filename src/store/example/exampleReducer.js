import Api from '../../service/api';
import * as actionTypes from './exampleActions';

const initialState = {
  data: {},
  dataStatus: Api.initialStatus,
};

export default function example(state = initialState, action) {
  switch (action.type) {

    case actionTypes.EXAMPLE_ACTION.REQUEST:
      return {
        ...state,
        dataStatus: action.payload.status,
      };

    case actionTypes.EXAMPLE_ACTION.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        dataStatus: action.payload.status,
      };

    case actionTypes.EXAMPLE_ACTION.FAILURE:
      return {
        ...state,
        dataStatus: action.payload.status,
      };

    case actionTypes.SIMPLE_EXAMPLE_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
