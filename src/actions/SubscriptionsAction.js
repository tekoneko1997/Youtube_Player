export const getSubscriptionsRequest = (data, pageToken='') => {
    return {
      type: 'GET_SUBSCRIPTIONS_REQUEST',
      data,
      pageToken,
    }
};
export const getSubscriptionsSuccess = (data) => {
    return {
      type: 'GET_SUBSCRIPTIONS_SUCCESS',
      data,
    }
};
export const getSubscriptionsFailed = (data) => {
    return {
      type: 'GET_SUBSCRIPTIONS_FAILED',
      data,
    }
};