import React from 'react';

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className="video-item" >
            <img className='video image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
        </div>

        <div className='content' >
          <div className='header'>{video.snippet.title}</div>

        </div>     
    )
}

export default VideoItem;