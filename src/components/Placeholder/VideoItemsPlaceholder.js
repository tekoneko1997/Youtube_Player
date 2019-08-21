import React from 'react';

const VideoItemsPlaceholder = () => {
    return (
        <div className="ui relaxed divided list">
            <div className="item">
                <div className="ui placeholder " style={{ "minWidth": "100%" }}>
                    <div className="image" style={{ "width": "576px", "height": "432px" }}>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className='ui segment'>
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="ui placeholder">
                    <div className="image header">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="ui placeholder">
                    <div className="image header">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItemsPlaceholder;