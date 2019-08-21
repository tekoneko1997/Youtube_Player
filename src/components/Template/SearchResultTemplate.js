import React from 'react';
import VideoList from '../organisms/VideoList';


function SearchResultTemplate(props) {
    return (
        <main className="mdl-layout__content">
            <div className="page-content">
                <div className='ui container' style={{ marginTop: '1em' }}>
                    <VideoList videosList={props.videosList} width={props.width} description={props.description}/>
                </div>
            </div>
        </main>
    )
};
export default SearchResultTemplate;