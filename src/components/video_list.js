import React from 'react'
import './video_list.css'
import VideoItem from './video_item'


    const VideoList = (props) => {
        const videoItems = props.items.map((video) => {
            return( <VideoItem key={video.etag}
               items={video} />
            );
        });

        return(
            <section className="video-List"> 
               {videoItems}
            </section>
        )
    }


export default VideoList;
