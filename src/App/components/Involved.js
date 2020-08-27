import React from "react";
import Principle1 from "../../img/team/involved_1.webp";
import Principle2 from "../../img/team/involved_2.webp";
import Principle3 from "../../img/team/involved_3.webp";

export default function Involved() {
  return (
    <div className="involved">
      <div className="involved__header">
        <h2 className="text-size-2">Get Involved</h2>
        <p className="text-size-4">
          Sustainable Practices to Fight Food Insecurity and waste
        </p>
      </div>
      <div className="involved__items-container">
        <div className="involved__item">
          <img src={Principle1} alt="Involved Pic" className="involved__img" />
          <div className="involved__text">
            <h3 className="text-size-3">Donate Money</h3>
            <p className="text-size-4 involved__text-p">Every dollar counts.</p>
            <button className="btn btn__involved">Donate</button>
          </div>
        </div>
        <div className="involved__item">
          <img src={Principle2} alt="Involved Pic" className="involved__img" />
          <div className="involved__text">
            <h3 className="text-size-3">Donate Food</h3>
            <p className="text-size-4 involved__text-p">For restaurants and local business.</p>
            <button className="btn btn__involved">Get in Touch</button>
          </div>
        </div>
        <div className="involved__item">
          <img src={Principle3} alt="Involved Pic" className="involved__img" />
          <div className="involved__text">
            <h3 className="text-size-3">Volunteer</h3>
            <p className="text-size-4 involved__text-p">Your time is valuable.</p>
            <button className="btn btn__involved">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
