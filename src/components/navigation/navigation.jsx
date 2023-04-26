import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./menuItems";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NavigationBar = (props) => {
  window.globalEmail = "";
  let username = props.username;
  const navigate = useNavigate();
  const profile = () => {
    axios
      .post("http://localhost:3001/fetch-email", {
        username: window.globalUsername,
      })
      .then((response) => {
        let globalEmailArray = response.data;
        window.globalEmail = globalEmailArray[0].email;
        axios.post("http://localhost:3001/test", {
          username: window.globalEmail,
        });
      });
    navigate("/profile");
  };

  return (
    <div className="navigation_container">
      <nav className="NavigationBar">
        <div>
          <h2 className="Logo">DBMS</h2>
        </div>

        <div className="NavigationMenu">
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.url}
                    state={{ username: username }}
                  >
                    <i class={item.icon}></i>
                    <p className="hide">{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="profile2">
          <button className="profile" onClick={profile}>
            <i class="fa-solid fa-user"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};
