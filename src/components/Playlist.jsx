/*import React from "react";
import { Link } from "react-router-dom";
import dummyData from "./data";
import PlaylistItem from "./PlaylistItem";


export default function Playlist() {
  return (
    <div className="playlist-container">
      <div className="background">
      <div className="header">
        <Link to="/"><button>{"<"}</button></Link>
        <span>PLAYLISTS</span>
        <button>🔍</button>
      </div>

      <h1 className="title">Playlists</h1>

      
</div>
<div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=80"
          alt="playlist cover"
        />
      </div>
      <div className="subtitle">Top 50 <br /> Rock Ballads</div>

      <div className="songs-container">
        {dummyData.map((item, index) => (
          <PlaylistItem
            key={index}
            title={item.title}
            artist={item.artist}
            duration={item.duration}
          />
        ))}
      </div>

      <div className="listen-all">
        <button>LISTEN ALL</button>
      </div>

      <div className="bottom-nav">
        <button>❤️</button>
        <button>🎙</button>
        <div className="center-button">▶</div>
        <button>☀️</button>
        <button>⚙️</button>
      </div>
    </div>
  );
}*/
import React from "react";
import { Link } from "react-router-dom";
import dummyData from "./data";
import PlaylistItem from "./PlaylistItem";

export default function Playlist() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <div className="playlist-container">
      <div className="background">
        <div className="header">
          <Link to="/"><button>{"<"}</button></Link>
          <span>PLAYLISTS</span> 
          <button>🔍</button>
        </div>
        <h1 className="title">Playlists</h1>

        <div className="image-container">
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt={`slider-${index}`} className="slider-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="subtitle">Top 50 <br /> Rock Ballads</div>

      <div className="songs-container">
        {dummyData.map((item, index) => (
          <PlaylistItem
            key={index}
            title={item.title}
            artist={item.artist}
            duration={item.duration}
          />
        ))}
      </div>

      <div className="listen-all">
        <button>LISTEN ALL</button>
      </div>

      <div className="bottom-nav">
        <button>❤️</button>
        <button>🎙</button>
        <div className="center-button">▶</div>
        <button>☀️</button>
        <button>⚙️</button>
      </div>
    </div>
  );
}
