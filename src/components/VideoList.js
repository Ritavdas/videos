import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, ListOnVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        ItemOnVideoSelect={ListOnVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
