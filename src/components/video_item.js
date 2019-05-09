import React, {Component} from 'react';
import './video_item.css'
import * as actions from '../actions'
import  {connect} from 'react-redux';

class VideoItem extends Component {
  render() {
      const { video, selectVideo} = this.props;
        console.log(this.props)
      const {snippet:{title, thumbnails:{default:{url}}}} = video;

    return (
       <li onClick={ () => selectVideo(video)} className="video-item" >
            <img className='video-image' src={url} alt={video.snippet.description}/>
        <div className='content'> 
            <div className='header'>{title}</div>
         </div> 
       </li>    
    )
}
}

export default connect(null, actions)(VideoItem)