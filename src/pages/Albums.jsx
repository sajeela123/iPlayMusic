import React from 'react';
import Header from '../components/Header';

const Albums = () => {
  const featuredAlbums = [
    { image: 'public/mick.png' },
    { image: 'public/mick.png' },
    { image: 'public/mick.png' }
  ];

  const newReleases = [
    {
      title: 'Old Town Road',
      artist: 'Billy Ray Cyrus',
      songs: 12,
      image:"public/mick.png"
    },
    {
      title: 'Victory Lab',
      artist: 'Nipsey Hussle',
      songs: 8,
      image: 'public/mick.png'
    },
    {
      title: 'Thank U, Next',
      artist: 'Ariana Grande',
      songs: 13,
      image: 'public/mick.png'
    },
    {
      title: 'Death Race For Love',
      artist: 'Juice WRLD',
      songs: 11,
      image: 'public/mick.png'
    }
  ];

  return (
    <div className="albums-container">
       <Header title="Music"/>
      <header>
        <h1 className="albums-title">All Albums</h1>
      </header>

      {/* Featured Albums */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Featured Albums</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="album-scroll">
          {featuredAlbums.map((album, index) => (
            <div className="album-card" key={index}>
              <img src={album.image} alt={`Album ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">New Releases</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="release-list">
          {newReleases.map((release, index) => (
            <div className="release-item" key={index}>
              <img src={release.image} alt={release.title} className="release-img" />
              <div className="release-info">
                <h3>{release.title}</h3>
                <p>{release.artist}</p>
              </div>
              <span className="release-songs">{release.songs} Songs</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Albums;
