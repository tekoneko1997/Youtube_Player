export const setVideoRequest = (data) => {
    return {
      type: 'SET_VIDEO_REQUEST',
      data,
    }
};
export const setVideoSuccess = (data) => {
    return {
      type: 'SET_VIDEO_SUCCESS',
      data,
    }
};
export const setVideoFailed = (data) => {
    return {
      type: 'SET_VIDEO_FAILED',
      data,
    }
};