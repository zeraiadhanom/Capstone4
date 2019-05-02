import React from 'react'
import './video_list.css'
import VideoItems from './video_item'

const VideoList = ({videos, handleVideoSelect}) => {
    const displayVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
        console.log(vidoe.id);

    });
    return <div className='listVideos'>{renderedVideos}</div>
};

export default VideoList;
