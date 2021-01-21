import React from "react";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Please search for movies...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='video-wrapper'>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </div>
      <div>
          <h3>{video.snippet.title} - {video.snippet.channelTitle}</h3>
          <h5 className="subtitle">{video.snippet.channelTitle}</h5>
          <h5 className="subtitle">{video.snippet.description}</h5>
      </div>
    </div>
  );
};

export default VideoDetail;
