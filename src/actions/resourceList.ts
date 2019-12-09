import parser from "../client/index";

export const RESOURCE_LIST_REQUEST_ = "RESOURCE_LIST_REQUEST_";
export const RESOURCE_LIST_SUCCESS_ = "RESOURCE_LIST_SUCCESS_";
export const RESOURCE_LIST_ERROR_ = "RESOURCE_LIST_ERROR_";
export const RESOURCE_LIST_RESET_ = "RESOURCE_LIST_RESET_";

export const resourceListRequest = (resource: string) => (): any => {
  return {
    type: `${RESOURCE_LIST_REQUEST_}${resource}`,
  };
};

export const resourceListSuccess = (resource: string) => (data: any): any => {
  return {
    type: `${RESOURCE_LIST_SUCCESS_}${resource}`,
    data,
  };
};

export const resourceListError = (resource: string) => (errorMessage: string): any => {
  return {
    type: `${RESOURCE_LIST_ERROR_}${resource}`,
    errorMessage,
  };
};

export const resourceListReset = (resource: string) => (): any => {
  return {
    type: `${RESOURCE_LIST_RESET_}${resource}`,
  };
};

export const resourceList = (resource: string) => (url: string) => {
  return (dispatch: Function): Promise<any> => {
    dispatch(resourceListRequest(resource)());
    return parser.parseURL(url)
      .then(result => {
        dispatch(resourceListSuccess(resource)(result));
        return result;
      })
      .catch(error => {
        dispatch(resourceListError(resource)(error.message));
        return error;
      });
  };
};
