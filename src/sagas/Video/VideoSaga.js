import { join, put, fork, call, takeEvery } from 'redux-saga/effects';
import history from '../../helpers/history'
import { setVideoSuccess, setVideoFailed } from '../../actions/VideoAction';
import { getCommentThreads } from '../CommentThreads/CommentThreadsSaga';
import { getSearchItemItemsbychannelId } from '../Search/SearchSaga';

import VideosApi from '../../apis/VideosApi';

const videosApi = new VideosApi();

function* setVideo(action) {
    const response = yield call(videosApi.getVideoRequest, action.videoId);
    if (response) {
        const setCommentsTask = yield fork(getCommentThreads, action.videoId);
        const setSubscriptionsTask = yield fork(getSearchItemItemsbychannelId, {data:response.data.items[0].snippet.channelId});
        yield join(setCommentsTask);
        yield join(setSubscriptionsTask);
        yield put(setVideoSuccess(response.data.items[0]));
        yield call(history.push, `/Watch?v=${action.videoId}`);
    }else{
        yield put(setVideoFailed("Search error"));
    }
}

const saga = [
    takeEvery('SET_VIDEO_REQUEST', setVideo)
];

export default saga;