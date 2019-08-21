import { combineReducers } from 'redux'
import SearchListReducer from './SearchListReducer';
import CommentThreadsReducer from './CommentThreadsReducer'
import VideoReducer from './VideoReducer';
import GuideCategoriesReducer from './GuideCategoriesReducer';

const reducers = combineReducers({
    CommentThreadsReducer,
    SearchListReducer,
    VideoReducer,
    GuideCategoriesReducer
});

export default reducers
