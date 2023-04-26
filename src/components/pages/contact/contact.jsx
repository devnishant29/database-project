import React from "react";
import './contact.css';
import { NavigationBar } from "../../navigation/navigation";
import { Contact_Content } from "./contact_content";
import { useLocation } from "react-router-dom";

export const ContactPage = () => {
  const location = useLocation();
  let username = window.globalUSername;

  return (
    <div>
      <NavigationBar  username={username}/>
      <Contact_Content  username={username}/>
    </div>
  );
};
