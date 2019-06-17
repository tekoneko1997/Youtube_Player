import React from 'react';
import { useSelector } from "react-redux";
import Video from '../atoms/Video';

const VideoDetail = () => {
    const video = useSelector(state => state.VideoReducer);
    if (!video) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            <Video video={video} />
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;