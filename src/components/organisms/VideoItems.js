import React from 'react';
import Video from '../atoms/Video';
import CommentThreads from '../molecules/CommentThreads';
import VideoDetail from '../molecules/VideoDetail';

const VideoItems = (props) => {
    if (!props.video) {
        return <div>Loading ...</div>;
    }
    return (
        <div className="ui relaxed divided list">
            <div className="item">
            <Video video={props.video} />
            </div>
            <div className="item">
            <VideoDetail video={props.video}/>
            </div>
            <div className="item">
                <CommentThreads commentList={props.commentList}/>
            </div>
        </div>
    )
}

export default VideoItems;