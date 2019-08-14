import React from 'react';
import { useSelector } from "react-redux";
import WatchTemplate from '../Template/WatchTemplate';

function WatchPage() {
    const video = useSelector(state => state.VideoReducer);
    const videosList = useSelector(state => state.SearchListReducer);
    const commentList = useSelector(state => state.CommentThreadsReducer);
 return (
    <WatchTemplate video={video} videosList={videosList} commentList={commentList}/>
    )
};
export default WatchPage;