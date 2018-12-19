import React from 'react';

import VideoItem from './VideoItem';

class VideoList extends React.Component {

    render = () => {
        const videos = this.props.videos;
        const onVideoSelect = this.props.onVideoSelect;
        
        const renderedVideoList = videos.map((video) => {
            return <VideoItem key={ video.id.videoId } video={ video } onVideoSelect={ onVideoSelect }/>;
        });

        return (
            <div className="ui relaxed divided list">{ renderedVideoList }</div>
        );
    }
}

export default VideoList;