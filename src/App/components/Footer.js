import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__pre-space"></div>
      <div className="footer__location">
        <span className="footer__location--name">The Davis Night Market</span>
        <span class="footer__location--address">
    
        </span>
      </div>
      <div className="subscription">
        <h3>Sign up for our newsletter</h3>
        <input
          className="subscription__input"
          placeholder="Enter your email address."
        ></input>
        <button className="btn">Subscribe</button>
      </div>
      <span className="legal">
        &copy; 2020 by Damian Toshiya Kellogg. All rights reserved.
      </span>
    </div>
  );
}