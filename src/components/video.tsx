'use client';
import React, { useState, useEffect } from "react";
import styles from "./video.module.css";

const DynamicBackgroundVideos = () => {
  const videos = ["/video/backvideo1.mp4", "/video/backvideo2.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const videoSwitchInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length); // Loop through videos
    }, 8000); // Switch every 8 seconds

    return () => clearInterval(videoSwitchInterval); // Cleanup interval
  }, [videos.length]); // Include videos.length in dependencies

  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted key={videos[currentVideo]}>
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className="text-7xl text-stroke2 font-extrabold mt-12">BOOST UP</h1>
        <p className="text-5xl text-white font-extrabold mt-5">
          The best place to rejoice <br /> variety of cuisines.
        </p>
      </div>
    </div>
  );
};

export default DynamicBackgroundVideos;
