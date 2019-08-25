
import React from 'react';
import { useDispatch } from "react-redux";

import '../../styles/loading.css';

import VideoItem from '../molecules/VideoItem';
import { setVideoRequest } from '../../actions/VideoAction';
import VideoListPlaceholder from '../Placeholder/VideoListPlaceholder';

const VideoList = (props) => {
    const dispatch = useDispatch();

    function handleVideoSelect(video) {
        dispatch(setVideoRequest(video.id.videoId, video.snippet.channelId))
    }

    if (props.videosList.items.length === 0) {
        return (<VideoListPlaceholder width={props.width} description={props.description} />);
    }

    const videosList = props.videosList.items.filter((x,i,video) => video.findIndex(_ => _.id.videoId === x.id.videoId) === i);
    const renderedVideos = videosList.map((video) => {
        return (
            <VideoItem key={video.id.videoId} video={video} width={props.width} description={props.description} handleVideoSelect={handleVideoSelect} />
        );
    });

    return (
        <div className='ui relaxed divided list' >{renderedVideos}{props.isFetching}
            <div className="sk-fading-circle">
                <div className="sk-circle1 sk-circle"></div>
                <div className="sk-circle2 sk-circle"></div>
                <div className="sk-circle3 sk-circle"></div>
                <div className="sk-circle4 sk-circle"></div>
                <div className="sk-circle5 sk-circle"></div>
                <div className="sk-circle6 sk-circle"></div>
                <div className="sk-circle7 sk-circle"></div>
                <div className="sk-circle8 sk-circle"></div>
                <div className="sk-circle9 sk-circle"></div>
                <div className="sk-circle10 sk-circle"></div>
                <div className="sk-circle11 sk-circle"></div>
                <div className="sk-circle12 sk-circle"></div>
            </div>
        </div>
    );
};
export default VideoList;