import React, { useState } from 'react';


const SongList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const songs = [
    { id: 1, title: 'Old Town Road', artist: 'Billy Ray Cyrus', duration: '3:58', image: 'public/mick.png' },
    { id: 2, title: "Don't Call Me Up", artist: 'Mabel', duration: '2:46', image: 'public/mick.png' },
    { id: 3, title: 'Let Me Down Slowly', artist: 'Alec Benjamin', duration: '4:12', image: 'public/mick.png' },
    { id: 4, title: 'Here With Me', artist: 'Marshmello', duration: '3:37', image: 'public/mick.png' },
    { id: 5, title: 'Paradise', artist: 'Bazzi', duration: '3:12', image: 'public/mick.png' },
    { id: 6, title: 'Sucker', artist: 'Jonas Brothers', duration: '3:56', image: 'public/mick.png' },
    { id: 7, title: 'Kill This Love', artist: 'BLACKPINK', duration: '2:47', image: 'public/mick.png' },
     { id: 8, title: 'Kill This Love', artist: 'BLACKPINK', duration: '2:47', image: 'public/mick.png' },
      { id: 9, title: 'Kill This Love', artist: 'BLACKPINK', duration: '2:47', image: 'public/mick.png' },
       { id: 9, title: 'Kill This Love', artist: 'BLACKPINK', duration: '2:47', image: 'public/mick.png' },
        
  ];

  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
   
    <div style={{ display: 'flex', maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
       
      {/* Song List */}
      <div style={{ flex: 1 }}>
          
        <h2 style={{ textAlign: 'center', color: '#ff3b3f' }}>All Songs</h2>
        {songs.map((song) => {
          const isSelected = selectedId === song.id;
          return (
            <div
              key={song.id}
              onClick={() => setSelectedId(song.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                backgroundColor: isSelected ? '#ff3b3f' : '#f9f9f9',
                color: isSelected ? '#fff' : '#000',
                cursor: 'pointer',
              }}
            >
              {/* Play Icon */}
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#ff3b3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                }}
              >
                <span style={{ color: '#fff', fontSize: '14px' }}>▶</span>
              </div>

              {/* Image only for selected song */}
              {isSelected && (
                <img
                  src={song.image}
                  alt="Album Art"
                  style={{ width: '50px', height: '50px', borderRadius: '5px', marginRight: '10px' }}
                />
              )}

              {/* Song Info */}
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ margin: '0', fontSize: '16px', color: isSelected ? '#fff' : '#000' }}>{song.title}</h3>
                <p style={{ margin: '0', fontSize: '14px', color: isSelected ? '#fff' : '#666' }}>{song.artist}</p>
              </div>

              {/* Duration */}
              <div style={{ fontSize: '14px', color: isSelected ? '#fff' : '#666' }}>{song.duration}</div>
            </div>
          );
        })}
      </div>

      {/* Alphabet Index */}
      <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4em' }}>
        {alphabet.map((char) => (
          <div key={char} style={{ fontSize: '12px', padding: '2px', color: '#999' }}>
            {char}
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default SongList;
