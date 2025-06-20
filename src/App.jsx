import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlaylistPage from "./pages/playalistPage.jsx";
import Featured from "./pages/Featured.jsx"; 
import Categories from "./pages/Categories.jsx";
import SongList from "./pages/SongList.jsx";
import Artist from "./pages/Artist.jsx";
import Albums from "./pages/Albums.jsx";
import AlbumDetail from "./pages/AlbumDetail.jsx";
import Footer from "./components/Footer.jsx";

import { useState } from "react";
import "./App.css"; 
import "./style/featured.css";
import "./style/categories.css";
import "./style/songlist.css";
import "./style/artist.css";
import "./style/album.css";
import "./style/albumdetail.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
 
  const toggleTheme = () => setDarkMode(!darkMode);
 
  return (
      <div style={{
      backgroundColor: darkMode ? "#341931" : "#fff",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      transition: "background-color 0.3s ease"
    }}>
   
      <Routes>
         <Route path="/featured" element={<Featured />} /> 
       <Route path="/playlist" element={<PlaylistPage />} />

       
         <Route path="/categories" element={<Categories />} />
         <Route path="/songlist" element={<SongList  />} /> 
           <Route path="/artist" element={<Artist />} />
   <Route path="/albums" element={<Albums />} />
     <Route path="/albumdetail" element={<AlbumDetail />} />
      </Routes>
   
        <Footer toggleTheme={toggleTheme} darkMode={darkMode} />
    
    </div>
  );
}

export default App;


