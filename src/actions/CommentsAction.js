export const getCommentThreadsRequest = (data) => {
    return {
      type: 'GET_COMMENT_THREADS_REQUEST',
      data,
    }
};
export const getCommentThreadsSuccess = (data) => {
    return {
      type: 'GET_COMMENT_THREADS_SUCCESS',
      data,
    }
};
export const getCommentThreadsFailed = (data) => {
    return {
      type: 'GET_COMMENT_THREADS_FAILED',
      data,
    }
};