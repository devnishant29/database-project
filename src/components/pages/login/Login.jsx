import React, { useState } from "react";
import axios from 'axios';


export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      userName: username,
      password: password,
    }).then((response) => {
      if(response.data.message) {
        setLoginStatus(response.data.message);
      }
      else {
        setLoginStatus(response.data[0].email);
      }
    })
    
  }


  return (
    <div className="auth-form-container">
      <h2 className="screen">Log in</h2>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          id="username"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button className="set" type="submit" onClick={login}>
          <i class="fa-solid fa-circle-arrow-right"></i>{""}
        </button>
        <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
