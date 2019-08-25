export const getSearchRequest = (data, pageToken='') => {
    return {
      type: 'GET_SEARCH_REQUEST',
      data,
      pageToken,
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

export const getSearchByChannelIdRequest = (data, pageToken='') => {
  return {
    type: 'GET_SEARCH_CHANNELID_REQUEST',
    data,
    pageToken,
  }
};
export const getSearchByChannelIdSuccess = (data) => {
  return {
    type: 'GET_SEARCH_CHANNELID_SUCCESS',
    data,
  }
};
export const getSearchByChannelIdFailed = (data) => {
  return {
    type: 'GET_SEARCH_CHANNELID_FAILED',
    data,
  }
};