export const getSearchRequest = (data) => {
    return {
      type: 'GET_SEARCH_REQUEST',
      data,
    }
};
export const getSearchSuccess = (data) => {
    return {
      type: 'GET_SEARCH_SUCCESS',
      data,
    }
};
export const getSearchFailed = (data) => {
    return {
      type: 'GET_SEARCH_FAILED',
      data,
    }
};