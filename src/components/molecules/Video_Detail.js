import React from 'react';
import { useSelector } from "react-redux";
import Video from '../atoms/Video';
import CommentThreads from './CommentThreads'

const VideoDetail = () => {
    const video = useSelector(state => state.VideoReducer);
    if (!video) {
        return <div>Loading ...</div>;
    }
    return (
        <div className="ui relaxed divided list">
            <div className="item">
            <Video video={video} />
            </div>
            <div className="item">
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            </div>
            <div className="item">
                <CommentThreads/>
            </div>
        </div>
    )
}

export default VideoDetail;