import React from "react";
import './about.css';
import { NavigationBar } from "../../navigation/navigation";
import { About_Content } from "./about_content";
import { useLocation } from "react-router-dom";

export const AboutPage = () => {
  const location = useLocation();
  let username = window.globalUSername;

  return (
    <div>
      <NavigationBar  username={username}/>
      <About_Content  username={username}/>
    </div>
  );
};
