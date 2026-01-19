import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/cinehub-logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* overlay */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)}></div>}

      {/* toggle button */}
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        <i className={open ? "fa-solid fa-angle-left" : "fa-solid fa-bars"}></i>
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-brand">
          <img className="logo" src={logo} alt="Cine Hub Logo" />
          {open && <p className="sidebar-tagline">Your Ultimate Movie Space</p>}
        </div>

        <nav className="sidebar-menu"  onClick={() => setOpen(!open)}>
          <NavLink to="/dashboard"><i className="fa-solid fa-chart-line"></i>{open && <span>Dashboard</span>}</NavLink>
          <NavLink to="/movies"><i className="fa-solid fa-film"></i>{open && <span>Movies</span>}</NavLink>
          <NavLink to="/users"><i className="fa-solid fa-users"></i>{open && <span>Users</span>}</NavLink>
          <NavLink to="/settings"><i className="fa-solid fa-gear"></i>{open && <span>Settings</span>}</NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
