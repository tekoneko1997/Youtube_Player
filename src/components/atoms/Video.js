import React from 'react';

const Video = ({ video }) => {
    //const video = useSelector(state => state.SearchListReducer);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className='ui embed'>
            <iframe src={videoSrc} allowFullScreen title='Video player' />
        </div>
    )
}

export default Video;