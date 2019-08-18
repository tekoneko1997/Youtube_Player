import { all } from 'redux-saga/effects';
import SearchSaga from './Search/SearchSaga';
import CommentThreadsSaga from './CommentThreads/CommentThreadsSaga';
import VideoSaga from './Video/VideoSaga';
import GuideCategories from './GuideCategories/GuideCategoriesSaga';

export default function* rootSaga() {
  yield all([
    ...SearchSaga,
    ...CommentThreadsSaga,
    ...VideoSaga,
    ...GuideCategories,
  ]);
}
