import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./login.css";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          if (username === "" || password === "") {
            setLoginStatus("Empty Username or Password");
            return;
          }
          navigate("/home");
        }
      });
  };

  return (
    <div className="container">
      <div className="auth-form-container">
        <h2 className="screen">Log in</h2>
        <form className="login-form" action="/login" method="POST">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            placeholder="username"
            id="username"
            name="username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
          <button className="set" type="submit" onClick={login}>
            <i class="fa-solid fa-circle-arrow-right"></i>
            {""}
          </button>
          <h1
            style={{
              color: "red",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {loginStatus}
          </h1>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};
