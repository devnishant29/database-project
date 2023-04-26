import React from "react";
import { useNavigate } from "react-router-dom";
import "./location.css"

export const Confirmed = () => {

  const navigate = useNavigate();

  const toHome = (e) => {
    navigate("/home", {state : {
      username: window.globalUsername
    }});
  }

  return (
    <div>
      <div className="page">
      <div className="hero-text">
        <h1 className="status">Booking Confirmed</h1>
        <button className="next" onClick={toHome}>Next</button>
      </div>
    </div>
    </div>
  );
};