import React from "react";
import './services.css';
import { NavigationBar } from "../../navigation/navigation";
import { Content } from "./content";
import { useLocation } from "react-router-dom";

export const ServicesPage = () => {
  const location = useLocation();
  let username = window.globalUSername;

  return (
    <div>
      <NavigationBar  username={username}/>
      <Content  username={username}/>
    </div>
  );
};
