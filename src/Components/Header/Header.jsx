import React from "react";
import "./Header.css";
import logo from "../../assets/cinehub-logo.png";

const Header = () => {
  return (
    <header className="cine-header">
      <div className="header-left">
        <img src={logo} className="header-logo" alt="Cine Hub" />
        <h2 className="site-title">Cine Hub</h2>
      </div>

      <div className="header-center">
        <input
          type="text"
          className="header-search"
          placeholder="Search movies, actors, genres..."
        />
      </div>

      <div className="header-right">
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-message"></i>

        <div className="user-box">
          <img
            src="https://i.pravatar.cc/150"
            className="user-avatar"
            alt=""
          />
          <span className="user-name">Shreya</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
