import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) => {
    // props.videos = array we want to edit out
    // Map over the videos map and return an item per video
    const renderedList = videos.map(video => {
        // Each video needs a key
        return(
            <VideoItem 
                key = {video.id.videoId} 
                onVideoSelect = {onVideoSelect} 
                video = {video}
            />
        );
    });

    return(
        <div className = "ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;