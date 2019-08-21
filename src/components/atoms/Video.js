import React from 'react';

const Video = ({ videoId }) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className='ui embed'>
            <iframe  src={videoSrc} allowFullScreen title='Video player' />
        </div>
    )
}

export default Video;