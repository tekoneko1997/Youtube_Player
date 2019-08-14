import React from 'react';
import VideoList from '../organisms/Video_List';
import VideoDetail from '../molecules/Video_Detail';
import Header from '../organisms/Header'

function App() {
 return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header/>
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title"> Menu</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="/">Link</a>
                    <a className="mdl-navigation__link" href="/">Link</a>
                    <a className="mdl-navigation__link" href="/">Link</a>
                    <a className="mdl-navigation__link" href="/">Link</a>
                </nav>
            </div>
            <main className="mdl-layout__content">
                <div className="page-content">
                    <div className='ui container' style={{ marginTop: '1em' }}>
                        <div className='ui grid'>
                            <div className="ui row">
                                <div className="eleven wide column">
                                    <VideoDetail/>
                                </div>
                                <div className="five wide column">
                                    <VideoList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
};
export default App;