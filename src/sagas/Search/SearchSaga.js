import { call, put, takeEvery } from 'redux-saga/effects';
import { getSearchSuccess, getSearchFailed, getSearchByChannelIdSuccess,  getSearchByChannelIdFailed} from '../../actions/SearchAction'
import SearchApi from '../../apis/SearchApi';

const searchApi = new SearchApi();

export function* getSearchItem(action) {
    const response = yield call(searchApi.getSearchItems, action.data, action.pageToken);
    if (response) {
        yield put(getSearchSuccess(response.data));
       // yield call(history.push, `/SearchResult?search_query=${action.data}`);
    }else{
        yield put(getSearchFailed("Search error"));
    }
}

export function* getSearchItemItemsbychannelId(action) {
    const response = yield call(searchApi.getSearchItemsbychannelId, action.data, action.pageToken);
    if (response) {
        yield put(getSearchByChannelIdSuccess(response.data));
    }else{
        yield put(getSearchByChannelIdFailed("Search error"));
    }
}

const saga = [
    takeEvery('GET_SEARCH_REQUEST', getSearchItem),
    takeEvery('GET_SEARCH_CHANNELID_REQUEST', getSearchItemItemsbychannelId)
];

export default saga;