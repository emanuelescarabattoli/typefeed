import {
  RESOURCE_LIST_REQUEST_,
  RESOURCE_LIST_SUCCESS_,
  RESOURCE_LIST_ERROR_,
  RESOURCE_LIST_RESET_,
} from "../actions/resourceList";

// A generic reducer used to list a resource
const resourceList = (resource: string) => (
  state: any = { isFetching: false, data: { results: [] }, errorMessage: "" },
  action: any,
): any => {
  switch (action.type) {
  case `${RESOURCE_LIST_REQUEST_}${resource}`:
    return { ...state, isFetching: true, data: { results: [] }, errorMessage: "" };
  case `${RESOURCE_LIST_SUCCESS_}${resource}`:
    return { ...state, isFetching: false, data: action.data, errorMessage: "" };
  case `${RESOURCE_LIST_ERROR_}${resource}`:
    return {
      ...state,
      isFetching: false,
      data: { results: [] }, errorMessage: action.errorMessage,
    };
  case `${RESOURCE_LIST_RESET_}${resource}`:
    return { ...state, isFetching: false, data: { results: [] }, errorMessage: "" };
  default:
    return state;
  }
};

export default resourceList;
