import React from 'react';

import Header from '../components/Header';
function App() {
  const featuredArtists = [
    { name: 'Aesop Rock', image: 'public/pexels-photo-949274.png' },
    { name: 'ONE OK ROCK', image: 'public/pexels-photo-949274.png' },
    { name: 'PnB Rock', image: 'public/pexels-photo-949274.png' }
  ];

  const artistOfMonth = [
    {
      name: 'Jonas Brothers',
      month: 'September',
      image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Imagine Dragons',
      month: 'October',
      image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Coldplay',
      month: 'November',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="container">
       <Header title="MUSIC"/>
      <header className="header">
        <h1 className="main-title">All Artists</h1>
      </header>

      {/* Artist of the Month */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Artist Of The Month</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="artist-month-scroll">
          {artistOfMonth.map((artist, index) => (
            <div className="artist-month-card" key={index}>
              <img src={artist.image} alt={artist.name} />
              <div className="month-overlay">
                <p className='month-overlay-info'>{artist.month}</p>
                <h3 className='month-overlay-heading'>{artist.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artists */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Featured Artists</h2>
          <span className="view-all">View All</span>
        </div>
        <div className="featured-scroll">
          {featuredArtists.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img src={artist.image} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Artists By Country */}
      <section className="section">
        <h2 className="section-title">Top Artists By Country</h2>
        <div className="country-buttons">
          <button className="country-btn us">TOP 50<br />US</button>
          <button className="country-btn global">TOP 50<br />GLOBAL</button>
        </div>
      </section>
    </div>
  );
}

export default App;
