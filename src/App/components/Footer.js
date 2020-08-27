import React from "react";
import Newsletter from './Newsletter'
import logo from "../../img/svg/logo.svg";
import { FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__pre-space"></div>
      <img src={logo} alt="logo" className="team__img" />

      <div className="footer__location_and_links">
        <h2 className="text-size-2">The Davis Night Market</h2>
        <h3 className="text-size-3">Mondays-Thursdays</h3>
        <h4 className="text-size-4">From 9:00pm - 11:00pm</h4>
        <h4 className="text-size-4">Central Park</h4>
        <h4 className="text-size-4">325 C St. Davis, CA</h4>
      </div>
      <div className="legal_and_social_media_links">
        <ul className="social-media-icons__list">
          <li className="social-media-icons__list-item">
            <FaFacebookSquare
              size={50}
              color="white"
              className="social-media-icon"
            />
          </li>
          <li className="social-media-icons__list-item">
            <FaInstagram
              size={50}
              color="white"
              className="social-media-icon"
            />
          </li>
          <li className="social-media-icons__list-item">
            <FaTwitter size={50} color="white" className="social-media-icon" />
          </li>
        </ul>
        <div className="legal">
          <span className="legal text-size-5">
            &copy; 2020 by Damian Toshiya Kellogg.
          </span>
          <span className="legal text-size-5">All rights reserved.</span>
        </div>
      </div>

      {/* <div className="subscription"> */}
      {/* <h3>Sign up for our newsletter</h3>
        <input
          className="subscription__input"
          placeholder="Enter your email address."
        ></input>
        <button className="btn">Subscribe</button> */}
      <Newsletter />
      {/* </div> */}
    </div>
  );
}