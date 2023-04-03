import React from "react";
import './home.css';
import { Hero } from "../../Hero/hero";
import { NavigationBar } from "../../navigation/navigation";
import { Content } from "./content";

export const HomePage = () => {

  return (
    <div>
      <NavigationBar/>
      <Content/>
    </div>
  );
};
