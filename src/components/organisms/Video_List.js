
import React from 'react';
import { useSelector } from "react-redux";
import VideoItem from '../molecules/Video_Item';

const VideoList = () => {
    const videosList = useSelector(state => state.SearchListReducer);
    const renderedVideos = videosList.items===undefined?[]:videosList.items.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;