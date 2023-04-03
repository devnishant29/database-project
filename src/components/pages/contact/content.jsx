import React from "react";
import "../content.css";

export const Content = () => {
  return (
    <div className="page">
      <div className="body1">
        <h2 className="common-heading">Feel Free To Contact Us</h2>
        <div className="map">
          <iframe
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
            action="https://formspree.io/f/moqzkkar"
            method="POST"
            className="contact-inputs"
          >
            <div className="user_details">
              <input className="cusername"
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />
              <input className="cemail"
                type="email"
                name="email"
                placeholder="email"
                autoComplete="off"
                required
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input className="submit" type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
