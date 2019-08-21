import React from 'react';

const Description = ({ channelTitle, description }) => {
    return(
        <div>
            <p>{channelTitle}</p>
            <p>{description}</p>
        </div>
    );
}

export default Description;