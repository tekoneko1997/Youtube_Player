import { call, put, takeEvery } from 'redux-saga/effects';
import history from '../../helpers/history'
import { getSearchSuccess, getSearchFailed } from '../../actions/SearchAction'
import SearchApi from '../../apis/SearchApi';

const searchApi = new SearchApi();

export function* getSearchItem(action) {
    const response = yield call(searchApi.getSearchItems, action.data);
    if (response) {
        yield put(getSearchSuccess(response.data));
        yield call(history.push, `/SearchResult?search_query=${action.data}`);
    }else{
        yield put(getSearchFailed("Search error"));
    }
}

const saga = [
    takeEvery('GET_SEARCH_REQUEST', getSearchItem)
];

export default saga;