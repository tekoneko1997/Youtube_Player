import React from 'react';
import Video from '../atoms/Video';
import CommentThreads from '../molecules/CommentThreads';
import VideoDetail from '../molecules/VideoDetail';
import VideoItemsPlaceholder from '../Placeholder/VideoItemsPlaceholder';

const VideoItems = (props) => {
    if (!props.video) {
        return (<VideoItemsPlaceholder/>);
    }
    return (
        <div className="ui relaxed divided list">
            <div className="item">
                <Video videoId={props.video.id} />
            </div>
            <div className="item">
                <VideoDetail video={props.video} />
            </div>
            <div className="item">
                <CommentThreads commentList={props.commentList} />
            </div>
        </div>
    )
}

export default VideoItems;