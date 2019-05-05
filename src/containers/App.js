
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import VideoPlay from '../components/videoPlay'
import SearchBar from '../components/searchBar';
import VideoList from '../components/video_list'
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
      <header className="App-header">
       <div className="menu">
         <ul className="nav">
           <li><a href="/">Home</a></li>
            <li><a href="/Favorite Videos/">Favorite Videos</a></li>
            <li><a href="/KidsOnly/">Kids Only</a></li>
         </ul>
       </div>
       </header>

       <section className="searchBar">
         <SearchBar onTermChange={this.props.actions.requestVideos} />
       </section >
        <section className="main">
        <VideoPlay />
         <VideoList items={this.props.items} />
        </section>   
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.videos.items)
  return {
    items: state.videos.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

