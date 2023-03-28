// import React, { useState } from "react";
import './App.css'
import Axios from "axios";
import { useState } from 'react';

import { Routes, Route } from 'react-router';


import { HomePage } from "./components/pages/home/home";
import { AboutPage } from "./components/pages/about/about";
import { ContactPage } from "./components/pages/contact/contact";
import { ServicesPage } from "./components/pages/service/services";
import { Login } from "./components/pages/login/Login";
import { Register } from "./components/pages/signup/signup";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/service" element={<ServicesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>


      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

    </div>
  );
}

export default App;