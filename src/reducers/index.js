import { combineReducers } from 'redux'
import SearchListReducer from './SearchListReducer';
import VideoReducer from './VideoReducer';

const reducers = combineReducers({
    SearchListReducer,
    VideoReducer,
});

export default reducers
