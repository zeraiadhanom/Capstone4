import React from 'react';

const VideoItem = ({items, handleVideoSelect}) => {
    const imageUrl = items.snippet.thumbnails.default.url

    return (
        <div onClick={ () => handleVideoSelect(items)} className="video-item" >
            <img className='video image' src={imageUrl} alt={items.snippet.description}/>

        <div className='content'> 
          <div className='header'>{items.snippet.title}</div>
         </div> 
         </div>    
    )
}

export default VideoItem;