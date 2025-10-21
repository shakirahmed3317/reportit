import React from "react";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => onNavigate("home")}>
        <h1>ReportIt</h1>
        <span>City Issue Reporting Platform</span>
      </div>
      <div className="nav-links">
        <button
          className="nav-btn secondary"
          onClick={() => onNavigate("city-signup")}
        >
          City Sign Up
        </button>
        <button
          className="nav-btn primary"
          onClick={() => onNavigate("resident-signup")}
        >
          Resident Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
