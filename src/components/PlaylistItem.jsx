// PlaylistItem.jsx

import React from "react";


const PlaylistItem = ({ title, artist, duration }) => {
  return (
    
    <div className="song-item">
      
      <div className="song-info">
        <button className="play-button">▶</button>
        <div>
          <div className="song-title">{title}</div>
          <div className="song-artist">{artist}</div>
        </div>
      </div>
      <div className="song-duration">{duration}</div>
    </div>
  );
};

export default PlaylistItem;
