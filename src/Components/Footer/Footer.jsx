import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="cine-footer">
      <div className="footer-grid">

        <div>
          <h3>Cine Hub</h3>
          <p>Your Ultimate Movie Space</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li>Movies</li>
            <li>Web Series</li>
            <li>Trending</li>
            <li>Top Rated</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="social-row">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Cine Hub — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
