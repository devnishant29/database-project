import React from "react";
import { NavigationBar } from "../../navigation/navigation";

export const MyBookings = () => {
  let username = window.globalUSername;

  return (
    <div>
      <NavigationBar username={username} />
      <div className="profile_content">
        
      </div>
    </div>
  );
};
