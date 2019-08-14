import { combineReducers } from 'redux'
import SearchListReducer from './SearchListReducer';
import CommentThreadsReducer from './CommentThreadsReducer'
import VideoReducer from './VideoReducer';

const reducers = combineReducers({
    CommentThreadsReducer,
    SearchListReducer,
    VideoReducer,
});

export default reducers
