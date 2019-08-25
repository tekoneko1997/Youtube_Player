import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import WatchTemplate from '../Template/WatchTemplate';
import { setVideoRequest } from '../../actions/VideoAction';
import useInfiniteScroll from '../../functions/useInfiniteScroll';
import { getSearchByChannelIdRequest } from '../../actions/SearchAction';

function WatchPage(props) {
    const video = useSelector(state => state.VideoReducer);
    //const videosList = useSelector(state => state.SearchListReducer);
    const ChannelVideosList = useSelector(state => state.SearchListByChannelIdReducer);
    const commentList = useSelector(state => state.CommentThreadsReducer);
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    var prevPageToken = "";
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

    function fetchMoreListItems() {
        setTimeout(() => {
            if (prevPageToken !== ChannelVideosList.nextPageToken) {
                prevPageToken = ChannelVideosList.nextPageToken
                dispatch(getSearchByChannelIdRequest(video.snippet.channelId, ChannelVideosList.nextPageToken));
            }
            setIsFetching(false);
        }, 100);
    }

 return (
    <WatchTemplate video={video} width={"168px"} videosList={ChannelVideosList} commentList={commentList} description={false} isFetching={isFetching}/>
    )
};

export default WatchPage;