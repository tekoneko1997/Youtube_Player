import { all } from 'redux-saga/effects';
import SearchSaga from './Search/SearchSaga'
export default function* rootSaga() {
  yield all([
    ...SearchSaga
  ]);
}
