import React from "react";
import './content.css';

export const Content = () => {

  return (
    <div>
      <img 
          src={require('./about.jpg')} 
          alt="logo" 
      />
      <div className="hero-text">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <a href="/">Travel Plan</a>
      </div>
    </div>
  );
};
