import React from 'react';

function VideoDetail(props){
    return (
        <div className='ui segment'>
            <h4 className='ui header'>{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;