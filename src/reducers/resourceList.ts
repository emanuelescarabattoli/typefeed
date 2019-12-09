import {
  RESOURCE_LIST_REQUEST_,
  RESOURCE_LIST_SUCCESS_,
  RESOURCE_LIST_ERROR_,
  RESOURCE_LIST_RESET_,
} from "../actions/resourceList";

const resourceList = (resource: string) => (
  state: any = { isFetching: false, data: [], errorMessage: "" },
  action: any,
): any => {
  switch (action.type) {
  case `${RESOURCE_LIST_REQUEST_}${resource}`:
    return { ...state, isFetching: true, data: [], errorMessage: "" };
  case `${RESOURCE_LIST_SUCCESS_}${resource}`:
    return { ...state, isFetching: false, data: action.data, errorMessage: "" };
  case `${RESOURCE_LIST_ERROR_}${resource}`:
    return {
      ...state,
      isFetching: false,
      data: [], errorMessage: action.errorMessage,
    };
  case `${RESOURCE_LIST_RESET_}${resource}`:
    return { ...state, isFetching: false, data: [], errorMessage: "" };
  default:
    return state;
  }
};

export default resourceList;
