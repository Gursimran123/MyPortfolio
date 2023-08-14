import React from 'react';
import "./FooterStyles.css";
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>HIG 304 Ratan Lal Nagar</p>
              <p>Kanpur</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7437843674
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I'm Gursimran Singh. I am a Frontend Developer with the intermediate
            knowledge of Html, CSS , JavaScript and ReactJs and basic knowledge
            of Express.js and MongoDB.
          </p>
          <div className="social">
            <Link><FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
            <Link><FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
            <Link><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer