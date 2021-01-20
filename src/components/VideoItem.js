import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

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
        <h5 className="subtitle">
          <b>{video.snippet.title}</b>
        </h5>
      </div>
    </div>
  );
};

export default VideoItem;
