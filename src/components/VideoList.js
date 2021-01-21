import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, selectVideo}) => {
    const videoList = videos.map((video, id) => {
        return <VideoItem video={video} key={id} selectVideo={selectVideo}/>
    })
    return (
        <div>
            {videoList}
        </div>
    )
}

export default VideoList
