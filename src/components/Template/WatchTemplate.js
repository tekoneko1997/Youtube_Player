import React from 'react';
import VideoList from '../organisms/Video_List';
import VideoItems from '../organisms/VideoItems';
import Header from '../organisms/Header'
import DrawerMenu from '../organisms/DrawerMenu';

function WatchTemplate(props) {
 return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header/>
            <DrawerMenu/>
            <main className="mdl-layout__content">
                <div className="page-content">
                    <div className='ui container' style={{ marginTop: '1em' }}>
                        <div className='ui grid'>
                            <div className="ui row">
                                <div className="eleven wide column">
                                    <VideoItems video={props.video} commentList={props.commentList}/>
                                </div>
                                <div className="five wide column">
                                    <VideoList videosList={props.videosList}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
};
export default WatchTemplate;