import {actionTypes} from './exampleActions';
import { REQUEST, SUCCESS, FAILURE } from '../../helpers/action';
import Api from "../../service/api";

const {
  GET,
  SET,
} = actionTypes;

const initialState = {
  exampleData: null,
  exampleDataStatus: Api.initialStatus,
};

export default function lifestyle(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET[REQUEST]:
      return {
        ...state,
        questionsDataStatus: Api.requestStatus,
      };
    case GET[SUCCESS]:
    case SET[SUCCESS]:
      return {
        ...state,
        questionsData: payload,
        questionsDataStatus: Api.successStatus,
      };
    case GET[FAILURE]:
      return {
        ...state,
        questionsDataStatus: Api.failStatus,
      };
    default:
      return state;
  }
}

