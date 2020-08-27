import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/svg/logo.svg";
// import logoMain from "../../img/svg/logo_main.svg";
import "../../index.css"

const activeStyle = {
  color: "#e62424",
  background_color: "black",
};

export default function Nav() {
  return (
    <div>
      {/* <div className="nav__upper_container">
        <img src={logoMain} className="logo" alt="logo" />
        <div className="nav__details">
          <h3>Monday, Tuesday & Wednesday Nights</h3>
          <h4>From 8:00pm - 10:30pm</h4>
          <h4>Central Park</h4>
          <h4>325 C St. Davis, CA</h4>
        </div>
      </div> */}
      <nav className="nav">
        <img src={logo} className="logo__nav" alt="logo" />
        <ul className="nav__row">
          <li>
            <NavLink
              to="/"
              exact
              activeStyle={activeStyle}
              className="nav-link"
            >
              <span className="text-size-3_5">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
              <span className="text-size-3_5">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/involved"
              activeStyle={activeStyle}
              className="nav-link"
            >
              <span className="text-size-3_5">Media</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" activeStyle={activeStyle} className="nav-link">
              <span className="text-size-3_5">Team</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="nav-link"
            >
              <span className="text-size-3_5">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
