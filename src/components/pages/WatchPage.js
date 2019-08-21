import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import WatchTemplate from '../Template/WatchTemplate';
import { setVideoRequest } from '../../actions/VideoAction';

function WatchPage(props) {
    const video = useSelector(state => state.VideoReducer);
    const videosList = useSelector(state => state.SearchListReducer);
    const commentList = useSelector(state => state.CommentThreadsReducer);
    const dispatch = useDispatch();
    let query = null;
    if (props.location.pathname === "/Watch") {
        let params = new URLSearchParams(props.location.search);
        query = params.get("v");
    }
    useEffect(()=>{
        if(!video){
            dispatch(setVideoRequest(query))
        }
    })
 return (
    <WatchTemplate video={video} width={"168px"} videosList={videosList} commentList={commentList} description={false} />
    )
};
export default WatchPage;