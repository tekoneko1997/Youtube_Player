
import React from 'react';
import VideoItem from '../molecules/VideoItem';
import { useDispatch } from "react-redux";
import { setVideoRequest } from '../../actions/VideoAction';
import VideoListPlaceholder from '../Placeholder/VideoListPlaceholder';

const VideoList = (props) => {
    const dispatch = useDispatch();
    function handleVideoSelect(video) {
        dispatch(setVideoRequest(video.id.videoId))
    }
    if (props.videosList.length===0) {
        return (<VideoListPlaceholder width={props.width} description={props.description}/>);
    }
    const renderedVideos = props.videosList.items === undefined ? [] : props.videosList.items.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} width={props.width} description={props.description} handleVideoSelect={handleVideoSelect}/>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;