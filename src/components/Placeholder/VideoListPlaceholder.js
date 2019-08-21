
import React from 'react';

const VideoListPlaceholder = (props) => {
    const marginright = props.description ? "16px" : "8px";
    const height = props.width==="246px"? "138.375px":"94.500px";
    return (
        <div className='ui relaxed divided list'>
            <div className='video-item item'>
                <div className='image' style={{ "minWidth": props.width, "marginRight": marginright }}>
                    <div className="ui placeholder" >
                        <div className='image' style={{ "minWidth": props.width, "height":height, "marginRight": marginright }}/>
                    </div>
                </div>
                <div className='content'>
                    <div className="ui placeholder" >
                       <div className='header' >
                            <div className="full line"/>
                            <div className="line"/>
                            <div className="long line"/>
                            <div className="long line"/>
                            <div className="line"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='video-item item'>
                <div className='image' style={{ "minWidth": props.width, "marginRight": marginright }}>
                    <div className="ui placeholder" >
                        <div className='image' style={{ "minWidth": props.width, "height":height, "marginRight": marginright }}/>
                    </div>
                </div>
                <div className='content'>
                    <div className="ui placeholder" >
                        <div className='header' >
                            <div className="full line"/>
                            <div className="line"/>
                            <div className="long line"/>
                            <div className="long line"/>
                            <div className="line"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='video-item item'>
            <div className='image' style={{ "minWidth": props.width, "marginRight": marginright }}>
                <div className="ui placeholder" >
                    <div className='image' style={{ "minWidth": props.width, "height":height, "marginRight": marginright }}/>
                </div>
            </div>
            <div className='content'>
                <div className="ui placeholder" >
                   <div className='header' >
                        <div className="full line"/>
                        <div className="line"/>
                        <div className="long line"/>
                        <div className="long line"/>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='video-item item'>
            <div className='image' style={{ "minWidth": props.width, "marginRight": marginright }}>
                <div className="ui placeholder" >
                    <div className='image' style={{ "minWidth": props.width, "height":height, "marginRight": marginright }}/>
                </div>
            </div>
            <div className='content'>
                <div className="ui placeholder" >
                    <div className='header' >
                        <div className="full line"/>
                        <div className="line"/>
                        <div className="long line"/>
                        <div className="long line"/>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='video-item item'>
            <div className='image' style={{ "minWidth": props.width, "marginRight": marginright }}>
                <div className="ui placeholder" >
                    <div className='image' style={{ "minWidth": props.width, "height":height, "marginRight": marginright }}/>
                </div>
            </div>
            <div className='content'>
                <div className="ui placeholder" >
                    <div className='header' >
                        <div className="full line"/>
                        <div className="line"/>
                        <div className="long line"/>
                        <div className="long line"/>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
            );
        };
        export default VideoListPlaceholder;

        /*
<div className="ui relaxed divided list">
                <div className="ui grid">
                    <div className="eleven wide column">
                        <div className="ui placeholder" style={{ "width": "200px" }}>
                            <div className="image" style={{ "width": "200px", "height": "112px" }}></div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className=" ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="eleven wide column">
                        <div className="ui placeholder" >
                            <div className="image" style={{ "maxWidth": "246px" }}></div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className=" ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="eleven wide column">
                        <div className="ui placeholder" style={{ "width": "200px" }}>
                            <div className="image" style={{ "width": "200px", "height": "112px" }}></div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className=" ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="eleven wide column">
                        <div className="ui placeholder" style={{ "width": "200px" }}>
                            <div className="image" style={{ "width": "200px", "height": "112px" }}></div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className=" ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="eleven wide column">
                        <div className="ui placeholder" style={{ "width": "200px" }}>
                            <div className="image" style={{ "width": "200px", "height": "112px" }}></div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className=" ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            */