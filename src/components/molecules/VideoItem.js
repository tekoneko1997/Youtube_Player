import React from 'react';

import Description from '../atoms/Description'
import '../../styles/video.css';

const VideoItem = (props) => {
    const marginright = props.description?"16px":"8px";
    return (
        <div onClick={() => props.handleVideoSelect(props.video)} className=' video-item item'>
            <img className='ui image' src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description} style={{ "maxWidth": props.width,  "marginRight": marginright}} />
            <div className='content'>
                <div className='header'>{props.video.snippet.title}</div>
                {props.description ? <Description channelTitle={props.video.snippet.channelTitle} description={props.video.snippet.description}/>: ""}
            </div>
        </div>
    )
};
export default VideoItem;