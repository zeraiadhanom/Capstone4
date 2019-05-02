import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return 
        <div>
            Loading --->
        </div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        console.log(typeof(videoSrc));
        return (
            <div>
                <div className='video-detail'>
                <iframe src={videoSrc} allowFullScreen title='video player' />
            </div>
              <div className="video_segment">
              <h4 className='video_header'>{video.snippet.title}</h4>
               <p>{video.snippet.description}</p>
            </div>
            </div>
        )
}

export default VideoDetail; 