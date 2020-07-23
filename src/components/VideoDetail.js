import React from "react";

const VideoDetail = ({ singleVideo }) => {
  if (!singleVideo) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${singleVideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{singleVideo.snippet.title}</h4>
        <p>{singleVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
