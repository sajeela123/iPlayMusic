import React from 'react';
import showmanImage from "/mick.png" ;
import Header from '../components/Header';

const Featured = () => {
  return (
    <div className="featured-container">
       <Header title="FEATURED"/>
      <h1 className='featured-heading'>Feature</h1>

      <div className="image-section">

            <img src={showmanImage} alt="The Greatest Showman" className="featured-image" />
        <div className="overlay-text">
          <h2>The Greatest<br></br> Showman</h2>
          <p>Soundtrack</p>
        </div>
 </div>

            <img src={showmanImage} alt="The Greatest Showman" className="featured-image" />
   
    </div>
  );
};

export default Featured;

