// src/components/Background.js
import React from 'react';
import HomeData from '../assets/HomeData.jpg';  // Import the image

function Background() {
  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${HomeData})`,  // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',  // Use fixed so it stays in place even if the page scrolls
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,  // Ensure it's behind all other content
      }}
    />
  );
}

export default Background;
