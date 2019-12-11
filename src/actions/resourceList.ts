import parser from "../client/index";

export const RESOURCE_LIST_REQUEST_ = "RESOURCE_LIST_REQUEST_";
export const RESOURCE_LIST_SUCCESS_ = "RESOURCE_LIST_SUCCESS_";
export const RESOURCE_LIST_ERROR_ = "RESOURCE_LIST_ERROR_";
export const RESOURCE_LIST_RESET_ = "RESOURCE_LIST_RESET_";

export interface Action {
  type: string;
}

export type ResourceListRequest = Action

export type ResourceListReset = Action

export interface ResourceListSuccess extends Action {
  data: Array<any>;
}

export interface ResourceListError extends Action {
  errorMessage: string;
}

export const resourceListRequest = (resource: string) => (): ResourceListRequest => {
  return {
    type: `${RESOURCE_LIST_REQUEST_}${resource}`,
  };
};

export const resourceListSuccess = (resource: string) => (data: any): ResourceListSuccess => {
  return {
    type: `${RESOURCE_LIST_SUCCESS_}${resource}`,
    data,
  };
};

export const resourceListError = (resource: string) => (
  (errorMessage: string): ResourceListError => {
    return {
      type: `${RESOURCE_LIST_ERROR_}${resource}`,
      errorMessage,
    };
  }
);

export const resourceListReset = (resource: string) => (): ResourceListReset => {
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
