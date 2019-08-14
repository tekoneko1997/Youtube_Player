import { all } from 'redux-saga/effects';
import SearchSaga from './Search/SearchSaga';
import CommentThreadsSaga from './CommentThreads/CommentThreadsSaga';
import VideoSaga from './Video/VideoSaga';

export default function* rootSaga() {
  yield all([
    ...SearchSaga,
    ...CommentThreadsSaga,
    ...VideoSaga,
  ]);
}
