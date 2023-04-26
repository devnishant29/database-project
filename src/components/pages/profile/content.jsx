import React from "react";
import "../content.css";
import "./profile.css";
import { useState } from "react";
import axios from "axios";

export const Content = (props) => {
  const [content, setContent] = useState(1);
  const [details, setDetails] = useState([]);

  const myBookings = () => {
    if (content === 1) {
      axios
        .post("http://localhost:3001/fetch-booking-details", {
          username: window.globalUsername,
        })
        .then((response) => {
          if (response.data.message) {
            setDetails(["No Bookings Found"]);
          } else {
            setDetails(response.data);
            axios.post("http://localhost:3001/test", {
              username: details,
            });
          }
        });
      setContent(2);
    } else {
      setContent(1);
    }
  };

  return (
    <div className="profile_content">
      <h3>Username: {window.globalUsername}</h3>
      {content === 1 && (
        <button className="my_bookings" onClick={myBookings}>
          My Bookings
        </button>
      )}
      {content === 2 && (
        <div>
          <button className="my_bookings" onClick={myBookings}>
            Hide Bookings
          </button>
          {/* <div className="Details_all">
            <h3>Booking Details</h3>
            <h1
              style={{
                color: "red",
                fontSize: "15px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {bookingInformation}
            </h1>
          </div> */}
          <ul>
            {details.map((item) => (
              <li key={item.id} className="booking-details">
                <div className="details-container">
                  <p className="location-name">{item.location}</p>
                </div>
                <div className="details-container">
                  <p className="location-date">{item.date}</p>
                </div>
                <div className="details-container">
                  <button
                    className="cancel_button"
                    onClick={(event) => {
                      axios
                        .post("http://localhost:3001/cancel-booking", {
                          username: window.globalUsername,
                          location: item.location,
                          date: item.date,
                        })
                        .then((response) => {
                          if (response.data.message) {

                          } 
                          else {

                          }
                        });
                    }}
                  >
                    Cancel Booking
                  </button>
                </div>
                <i></i>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
