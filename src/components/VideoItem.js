import React from "react";
import moment from "moment";


const VideoItem = ({ video, selectVideo }) => {
  return (
    <div className="video-item">
      <div
          className="video-item-wrapper"
        onClick={() => selectVideo(video)}
      >
        <img
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
       <div>
           <h5 className="subtitle">
               <b>{video.snippet.title}</b>
           </h5>
           <span className="video-item-date">{moment(video.snippet.publishedAt, "YYYYMMDD").fromNow()}</span>
           <p>{video.snippet.channelTitle}</p>
           {/*<p>{video.snippet.description}</p>*/}
       </div>
      </div>
    </div>
  );
};

export default VideoItem;
