
import React from 'react';
import VideoItem from '../molecules/Video_Item';

const VideoList = (props) => {
    const renderedVideos = props.videosList.items===undefined?[]:props.videosList.items.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;