import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/searchBar';
import VideoList from '../components/video_list'


class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestVideos} />
		<VideoList videos={this.props.videos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);