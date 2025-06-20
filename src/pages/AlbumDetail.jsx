import React from "react";
import Header from "../components/Header";

const songs = [
  { title: "Old Town Road", artist: "Billy Ray Cyrus", duration: "3:58" },
  { title: "Don’t Call Me Up", artist: "Mabel", duration: "2:46" },
  { title: "Let Me Down Slowly", artist: "Alec Benjamin", duration: "4:12" },
  { title: "Paradise", artist: "Bazzi", duration: "3:12" },
  { title: "Sucker", artist: "Jonas Brothers", duration: "3:56" },
  { title: "Kill This Love", artist: "BLACKPINK", duration: "2:47" },
  { title: "Sucker", artist: "Jonas Brothers", duration: "3:56" },
  { title: "Sucker", artist: "Jonas Brothers", duration: "3:56" },
];

export default function AlbumDetail() {
  return (
    <div className="album-detail">

       <Header title="Album"/>
      <div className="banner">
        <h1>Old Town Road</h1>
        <div className="tag-buttons">
          <button className="tag">country</button>
          <button className="tag">country road</button>
        </div>
      </div>


      <div className="section">
        <h2>All Songs</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className="song-item">
              <span className="play-icon">▶️</span>
              <div className="song-info">

                <strong>{song.title}</strong>
                <span>{song.artist}</span>
              </div>
              <span className="duration">{song.duration}</span>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
}

