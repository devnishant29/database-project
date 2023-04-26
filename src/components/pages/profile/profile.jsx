import React from "react";
import { NavigationBar } from "../../navigation/navigation";
import "./profile.css" ;
import { Content } from "./content";

export const Profile = () => {
  let username = window.globalUsername;


  return (
    <div>
      <NavigationBar username={username} />
      <Content username={username} />
    </div>
  );
};
