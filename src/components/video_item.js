import React from 'react';

const VideoItem = ({item, handleVideoSelect}) => {
    const imageUrl = item.snippet.thumbnails.default.url

    return (
        <div onClick={ () => handleVideoSelect(item)} className="video-item" >
            <img className='video image' src={imageUrl} alt={item.snippet.description}/>

        <div className='content'> 
          <div className='header'>{item.snippet.title}</div>
         </div> 
         </div>    
    )
}

export default VideoItem;