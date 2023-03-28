import React, { useState } from "react";
import axios from 'axios';

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message);
        } else {
          setRegisterStatus("Account created successfully");
        }
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Sign Up</h2>
      <form className="register-form"  action="/register" method="POST" >
        <label htmlFor="username">Username</label>
         <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
       
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
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
        <button className="set" type="submit" onClick={signup}>
          <i class="fa-solid fa-circle-arrow-right"></i>{" "}
        </button>
        <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
