import React, { useRef, useState, useEffect } from "react";
import videoSrc from '../../assets/images/video.mp4';
import thumbnailSrc from '../../assets/images/kingbanner2.jpg';

function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    // Event listener for video pause and end
    const handlePauseOrEnd = () => setIsPlaying(false);

    if (videoElement) {
      videoElement.addEventListener("pause", handlePauseOrEnd);
      videoElement.addEventListener("ended", handlePauseOrEnd);
    }

    // Cleanup event listeners
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("pause", handlePauseOrEnd);
        videoElement.removeEventListener("ended", handlePauseOrEnd);
      }
    };
  }, []);

  return (
    <div className="relative      w-full    md:w-[60%] lg:w-[80%]  lg:rounded-lg   lg:mx-auto my-[5rem]  ">
      {isPlaying ? (
        <video
        //   ref={videoRef}
          src={videoSrc}
          className="   px-[1rem]    w-full h-auto    rounded-[20px]   double-border-[5px]  shadow-md    border-black"
          controls
          autoPlay
          onClick={handleVideoClick} // Toggle play/pause on click
        />
      ) : (
        <img
          src={thumbnailSrc}
          alt="Video Thumbnail"
          className="w-full h-auto cursor-pointer   px-[1rem]  rounded-lg"
          onClick={handleThumbnailClick} // Switch to video on thumbnail click
        />
      )}

      {/* Centered play button overlay */}
      {!isPlaying && (
        <button
          onClick={handleThumbnailClick}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl rounded-full w-16 h-16 m-auto"
        >
          ▶
        </button>
      )}
    </div>
  );
}

export default Video;
