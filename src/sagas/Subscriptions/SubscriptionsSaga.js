import { call, put, takeEvery } from 'redux-saga/effects';
import history from '../../helpers/history'
import { getSubscriptionsSuccess, getSubscriptionsFailed } from '../../actions/SubscriptionsAction'
import SubscriptionsApi from '../../apis/SubscriptionsApi';

const subscriptionsApi = new SubscriptionsApi();

export function* getSubscriptionsItem(action, pageToken='') {
    const response = yield call(subscriptionsApi.getSubscriptionItems, action, pageToken);
    if (response) {
        yield put(getSubscriptionsSuccess(response.data));
    }else{
        yield put(getSubscriptionsFailed("Search error"));
    }
}

const saga = [
    takeEvery('GET_SUBSCRIPTIONS_REQUEST', getSubscriptionsItem)
];

export default saga;