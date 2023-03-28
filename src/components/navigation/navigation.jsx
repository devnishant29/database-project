import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./menuItems";

export const NavigationBar = () => {
  return (
    <nav className="NavigationBar">
      <div>
        <h2 className="Logo">DBMS</h2>
      </div>

      <div className="NavigationMenu">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i class={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div></div>
    </nav>
  );
};
