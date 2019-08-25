import React from 'react';
import VideoList from '../organisms/VideoList';
import VideoItems from '../organisms/VideoItems';

function WatchTemplate(props) {
    return (
        <main className="mdl-layout__content"　id="main">
            <div className="page-content" id="page-content">
                <div className='ui container' style={{ marginTop: '1em' }}>
                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoItems video={props.video} commentList={props.commentList} />
                            </div>
                            <div className="five wide column">
                                <VideoList videosList={props.videosList}　width={props.width} description={props.description} query={props.query} isFetching={props.isFetching}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
export default WatchTemplate;