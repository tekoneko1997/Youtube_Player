import { combineReducers } from 'redux'
import SearchListReducer from './SearchListReducer';
import CommentThreadsReducer from './CommentThreadsReducer'
import VideoReducer from './VideoReducer';
import GuideCategoriesReducer from './GuideCategoriesReducer';
import SearchListByChannelIdReducer from './SearchListByChannelIdReducer'

const reducers = combineReducers({
    CommentThreadsReducer,
    SearchListReducer,
    VideoReducer,
    GuideCategoriesReducer,
    SearchListByChannelIdReducer
});

export default reducers
