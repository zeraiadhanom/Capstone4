import React from 'react';
import './video_detail.css'

const VideoDetail = ({items}) => {
    if (!items) {
        return 
        <div>
            Loading --->
        </div>
    }
    const videoSrc = `https://www.youtube.com/embed/${items.id.itemsId}`
        console.log(typeof(videoSrc));
        return (
            <div>
                <div className='video-detail'>
                <iframe src={videoSrc} allowFullScreen title='video player' />
            </div>
              <div className="video_segment">
              <h4 className='video_header'>{items.snippet.title}</h4>
               <p>{items.snippet.description}</p>
            </div>
            </div>
        )
}

export default VideoDetail; 