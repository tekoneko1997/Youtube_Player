import { call, put, takeEvery } from 'redux-saga/effects';
import { getCommentThreadsSuccess, getCommentThreadsFailed } from '../../actions/CommentsAction'
import CommentThreadsApi from '../../apis/CommentThreadsApi';

const commentThreadsApi = new CommentThreadsApi();

export function* getCommentThreads(action) {
    const response = yield call(commentThreadsApi.getcommentThreads, action);
    if (response) {
        yield put(getCommentThreadsSuccess(response.data));
    }else{
        yield put(getCommentThreadsFailed("Search error"));
    }
}

const saga = [
    takeEvery('GET_COMMENT_THREADS_REQUEST', getCommentThreads)
];

export default saga;