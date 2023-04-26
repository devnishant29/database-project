import React from "react";
import "./home.css";
import { NavigationBar } from "../../navigation/navigation";
import { Content } from "./content";
import { useLocation } from "react-router-dom";


export const Page = (props) => {
  const location = useLocation();
  let username = location.state.username;

  return (
    <div>
      <NavigationBar />
      <Content username={username} />
    </div>
  );
};
