import { call, put, takeEvery } from 'redux-saga/effects';
import { getSearchSuccess, getSearchFailed } from '../../actions/SearchAction'
import YoutubeApi from '../../apis/YoutubeApi';

const youtubeApi = new YoutubeApi();

export function* getSearchItem(action) {
    const response = yield call(youtubeApi.getSearchItems, action.data);
    if (response) {
        yield put(getSearchSuccess(response.data));
    }else{
        yield put(getSearchFailed("Search error"));
    }
}

const saga = [
    takeEvery('GET_SEARCH_REQUEST', getSearchItem)
];

export default saga;