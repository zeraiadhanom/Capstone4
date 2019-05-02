import React from 'react';

const VideoItem = (video) => {
    return (
        <div className="video-list"width="420" height="345">
        < video src={video.items.url}/>
        </div>     
    )
}

export default VideoItem;