import { join, put, fork, takeEvery } from 'redux-saga/effects';
//import { put,takeEvery } from 'redux-saga/effects';
import { getCommentThreads } from '../CommentThreads/CommentThreadsSaga';
import { setVideoSuccess } from '../../actions/VideoAction';

function* setVideo(action) {
    const setCommentsTask = yield fork(getCommentThreads, action.data.id.videoId);
    yield join(setCommentsTask);
    yield put(setVideoSuccess(action.data));
}

const saga = [
    takeEvery('SET_VIDEO_REQUEST', setVideo)
];

export default saga;