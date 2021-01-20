import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/Searchbar";
import VideoDetail from "./components/Videodetails";
import api from "./api/api";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSubmit = async query => {
    const response = await api.get("search", { params: { q: query } });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])
  };
  const selectVideo = (video) => {
      setSelectedVideo(video)
  }
  return (
    <div className='container'>
        <SearchBar onFormSubmit={handleSubmit} />
        <div className="grid-container">
            <VideoDetail video={selectedVideo}/>
            <VideoList videos={videos} selectVideo={selectVideo}/>
        </div>
    </div>
  );
};
export default App;
