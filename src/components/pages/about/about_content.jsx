import React from "react";
import "../content.css";

export const About_Content = () => {
  return (
    <div className="page">
      <div className="image_container">
        <img src={require("./about.jpg")} alt="logo" />
      </div>
      <div className="hero-text">
        <h1>About us</h1>
        <p className="about_details">
          Nurtured from the seed of a single idea ‘to empower the traveller with
          easy & instant travel bookings providing comprehensive choices’,
          MakeMyTrip is a pioneer in India’s online travel space. Founded by
          Deep Kalra in the year 2000, NAME began its journey by serving
          the US-India travel market with best-value products & services,
          powered by robust technology and round-the-clock customer support.
          After successfully consolidating its position as a customer-first
          brand, known for its reliability and transparency, MakeMyTrip launched
          its India operations in 2005.
        </p>
      </div>
    </div>
  );
};
