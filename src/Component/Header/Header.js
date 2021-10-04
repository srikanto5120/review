import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <NavLink className="menuLink " to="/home">
          <h3>DUGAT</h3>
        </NavLink>
      </div>
      <div>
        <NavLink className="menuLink " to="/home">
          {" "}
          Home
        </NavLink>
        <NavLink className="menuLink" to="/services">
          {" "}
          Services
        </NavLink>

        <NavLink className="menuLink" to="/caurses">
          Caurses
        </NavLink>
        <NavLink className="menuLink" to="/about">
          {" "}
          About
        </NavLink>
        <NavLink className="menuLink" to="/contact">
          {" "}
          Contact
        </NavLink>
        <NavLink className="menuLink" to="/singin">
          <button className="btn btn-primary">Sign In</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
