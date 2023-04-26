import React, { useState } from "react";
import { LocationsDetails } from "./location_details";
import { NavigationBar } from "../../navigation/navigation";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./location.css";
import axios from "axios";

export const Locations = () => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let username = window.globalUsername;

  return (
    <div>
      <NavigationBar username={username} />
      <div>
        <div className="location_page">
          <div className="locations_details">
            <ul className="location_list">
              {LocationsDetails.map((item, index) => {
                return (
                  <li key={index}>
                    <div className={item.cName}>
                      <div className="image_text">
                        <img
                          className="location_image"
                          src={item.href}
                          alt="logo"
                        ></img>
                        <div className="details">
                          <h1 className="title">{item.title}</h1>
                          <p className="summary">{item.summary}</p>
                          <div tour_about>
                            <p className="tour_duration">
                              Tour Duration : {item.duration}
                            </p>
                            <p className="tour_price">
                              Tour Price : {item.price}
                            </p>
                          </div>
                          <input
                            className="date_picker"
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                          ></input>
                          <button
                            className="travel_button"
                            onClick={(event) => {
                              axios
                                .post("http://localhost:3001/book-location", {
                                  username: window.globalUsername,
                                  location: item.title,
                                  date: date,
                                })
                                .then((response) => {
                                  if (response.data.message) {
                                    navigate("/booking-failed", {
                                      state: {
                                        username: username,
                                      },
                                    });
                                  } else {
                                    navigate("/booking-confirmed", {
                                      state: {
                                        username: username,
                                      },
                                    });
                                  }
                                });
                            }}
                          >
                            Confirm your Trip
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
