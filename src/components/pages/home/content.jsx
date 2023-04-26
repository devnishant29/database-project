import React from "react";
import "../content.css";
import "./home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Content = (props) => {
  const navigate = useNavigate();
  let username = props.username;
  const Locations = () => {
    navigate("/locations", {
      state: {
        username: username,
      },
    });

    // axios.post("http://localhost:3001/test", {
    //   username: username,
    // });

  };

  return (
    <div className="page">
      <div className="image_container">
        <img src={require("./home.jpg")} alt="logo" />
      </div>
      <div className="hero-text">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <button className="show" onClick={Locations}>
          Travel Locations
        </button>
      </div>
    </div>
  );
};
