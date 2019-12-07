import parser from "../client/index";

//  Actions available for generic list resource reducer
export const RESOURCE_LIST_REQUEST_ = "RESOURCE_LIST_REQUEST_";
export const RESOURCE_LIST_SUCCESS_ = "RESOURCE_LIST_SUCCESS_";
export const RESOURCE_LIST_ERROR_ = "RESOURCE_LIST_ERROR_";
export const RESOURCE_LIST_RESET_ = "RESOURCE_LIST_RESET_";

// Action creator for start fetching a resource
export const resourceListRequest = (resource: string) => (): any => {
  return {
    type: `${RESOURCE_LIST_REQUEST_}${resource}`,
  };
};

// Action creator for a successful list resource request
export const resourceListSuccess = (resource: string) => (data: Array<any>): any => {
  return {
    type: `${RESOURCE_LIST_SUCCESS_}${resource}`,
    data,
  };
};

// Action creator for a successful list resource request
export const resourceListError = (resource: string) => (errorMessage: string): any => {
  return {
    type: `${RESOURCE_LIST_ERROR_}${resource}`,
    errorMessage,
  };
};

// Action creator for resetting the data
export const resourceListReset = (resource: string) => (): any => {
  return {
    type: `${RESOURCE_LIST_RESET_}${resource}`,
  };
};

// Here we dispatch the request action and then, after it is resolved, the success action
// or, if fails, the error action
export const resourceList = (resource: string) => (url: string) => {
  return (dispatch: Function): Promise<Array<any>> => {
    dispatch(resourceListRequest(resource)());
    return parser.parseURL(url)
      .then(result => {
        dispatch(resourceListSuccess(resource)(result.data));
        return result.data;
      })
      .catch(error => {
        dispatch(resourceListError(resource)(error.message));
        return {};
      });
  };
};
