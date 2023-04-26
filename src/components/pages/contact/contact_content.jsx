import React, { useState } from "react";
import "../content.css";
import axios from "axios";

export const Contact_Content = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contact_data = (e) => {
    e.preventDefault();
    if(username==="" || email==="" || message === "")
      return;
    document.getElementById("theForm").submit();
    axios.post("http://localhost:3001/contact_data", {
      username: username,
      email: email,
      message: message,
    });
  };

  return (
    <div className="page">
      <div className="body1">
        <h2 className="common-heading">Feel Free To Contact Us</h2>
        <div className="map">
          <iframe
            title="map"
            className="map_all"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7331.186489744947!2d72.64668356293434!3d23.25788423617062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c777c4b5e63%3A0xf2af0643c7186398!2sIndian%20Institute%20of%20Information%20Technology%20Vadodara%20(Gandhinagar%20Campus)!5e0!3m2!1sen!2sin!4v1680415772075!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div>
        <div className="message">
          <h2 className="notify">Send us a message</h2>
          <div className="contact_us">
            <form
              id="theForm"
              action="https://formspree.io/f/moqzkkar"
              method="POST"
              className="contact-inputs"
            >
              <div className="user_details">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  placeholder="username"
                  id="username"
                  name="username"
                  required
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <textarea
                cols="30"
                rows="6"
                autoComplete="off"
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                type="message"
                placeholder="message"
                id="message"
                name="message"
              ></textarea>
              <button className="message_button" onClick={contact_data}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
