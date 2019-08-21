import { call, put, takeEvery } from 'redux-saga/effects';
import { getGuideCategoriesSuccess, getGuideCategoriesFailed } from '../../actions/GuideCategoriesAction'
import GuideCategoriesApi from '../../apis/GuideCategoriesApi';

const guideCategoriesApi = new GuideCategoriesApi();

export function* getGuideCategories(action) {
    const response = yield call(guideCategoriesApi.guideCategories, action);
    if (response) {
        yield put(getGuideCategoriesSuccess(response.data));
    }else{
        yield put(getGuideCategoriesFailed("get error"));
    }
}

const saga = [
    takeEvery('GET_GUIDE_CATEGORIES_REQUEST', getGuideCategories)
];

export default saga;