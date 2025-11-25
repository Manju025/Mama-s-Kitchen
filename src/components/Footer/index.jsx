import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       <div className="footer-section">
          <h3 className="footer-title script-font">Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> Hyderabad, India
          </p>
          <p>
            <FaPhoneAlt /> +91 9121983461
          </p>
          <p>
            <FaEnvelope /> manjundhar1701@gmail.com
          </p>
        </div>

        <div className="footer-section center">
          <h2 className="footer-brand script-font">Mama's Kitchen</h2>
          <p className="footer-desc">
            Serving authentic Indian, Telugu, and global flavors with quality,
            freshness, and true hospitality.
          </p>

          <div className="footer-social">
            <Link to = "https://www.facebook.com/adagiri.manjundhar/">
              <FaFacebookF />
            </Link>
            <Link to = "https://x.com/ManjundharM">
              <FaTwitter />
            </Link>
            <Link to = "https://www.linkedin.com/in/manjundhar-adagiri/">
              <FaLinkedin />
            </Link>
            <Link to = "https://www.instagram.com/_manju.smartz0_/#">
              <FaInstagram />
            </Link>
            <Link to = "https://github.com/Manju025">
              <FaGithub />
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title script-font">Opening Hours</h3>
          <p>Everyday</p>
          <p>10.00 AM – 10.00 PM</p>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 All Rights Reserved By Your Mama's Kitchen Resturant
      </p>
      <p className="footer-copy sub">© Distributed By Manju025 ~GitHub</p>
    </footer>
  );
};

export default Footer;
