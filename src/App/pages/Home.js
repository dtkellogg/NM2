import React from "react";
import logoMain from "../../img/svg/logo_main.svg";
import logoMain2 from "../../img/svg/logo_main_orange.svg";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero__text-box-logo">
        <img src={logoMain2} className="logo__home" alt="logo" />
        <div className="nav__details">
          <h3 className="text-size-3">Mondays - Thursdays</h3>
          <h4 className="text-size-4">From 9:00pm - 11:00pm</h4>
          <h4 className="text-size-4">Central Park</h4>
          <h4 className="text-size-4">5th St. & B St. Davis, CA</h4>
        </div>
      </div>
      <div className="hero__text-box-btns">
        <h1 className="text-size-1">Nobody goes to bed hungry.</h1>
        <div className="btn__header-container">
          <div className="btn__glow-container">
            <a href="#" className="btn__glow-item">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Donate
            </a>
          </div>
          <div className="btn__glow-container">
            <a href="#" className="btn__glow-item">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
