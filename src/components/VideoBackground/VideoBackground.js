// src/components/VideoBackground/VideoBackground.js
import React from "react";

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    >
      <source src="/assets/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
