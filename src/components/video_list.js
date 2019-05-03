import React from 'react'
import './video_list.css'
import VideoItem from './video_item'


    const VideoList = (props) => {
        const videoItems = props.items.map((items) => {
            return <VideoItem key={items.id}
               items={items} />
        });

        return(
            <section className="video-List"> 
               {videoItems}
            </section>
        )
    }


export default VideoList;
