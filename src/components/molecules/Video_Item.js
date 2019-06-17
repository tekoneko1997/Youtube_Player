import React from 'react';
import { useDispatch } from "react-redux";
import { setVideoSuccess } from '../../actions/VideoItem';
import '../../styles/video.css';

function VideoItem(props){
    const dispatch = useDispatch();
    function handleVideoSelect() {
        dispatch(setVideoSuccess(props.video))
    }
    return (
        <div onClick={() => handleVideoSelect()} className=' video-item item'>
            <img className='ui image' src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description} />
            <div className='content'>
                <div className='header '>{props.video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;