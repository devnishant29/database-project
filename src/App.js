// import React, { useState } from "react";
import "./App.css";
import { useState } from "react";

import { Routes, Route } from "react-router";

import { HomePage } from "./components/pages/home/home";
import { AboutPage } from "./components/pages/about/about";
import { ContactPage } from "./components/pages/contact/contact";
import { ServicesPage } from "./components/pages/service/services";
import { Login } from "./components/pages/login/Login";
import { Register } from "./components/pages/signup/signup";
import { Locations } from "./components/pages/Locations/locations";
import { Profile } from "./components/pages/profile/profile";
import { Confirmed } from "./components/pages/Locations/booking_confirmed";
import { Failed } from "./components/pages/Locations/booking_failed";
import { MyBookings } from "./components/pages/profile/myBookings";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            currentForm === "login" ? (
              <Login onFormSwitch={toggleForm} />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking-confirmed" element={<Confirmed />} />
        <Route path="/booking-failed" element={<Failed />} />
        <Route path="/mybookings" element={<MyBookings/>} />
      </Routes>
    </div>
  );
}

export default App;
