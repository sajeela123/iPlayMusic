import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PlaylistPage from "./pages/playalistPage.jsx";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
}

export default App;

