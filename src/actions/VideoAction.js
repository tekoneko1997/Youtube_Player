export const setVideoRequest = (videoId, channelId = "",pageToken='') => {
    return {
      type: 'SET_VIDEO_REQUEST',
      videoId,
      channelId,
      pageToken,
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