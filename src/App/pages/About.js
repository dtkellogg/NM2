import React from "react";
import Group from "../../img/team/group1.webp";

export default function Involved() {
  return (
    <div className="about">
      <div className="about__header">
        <h2 className="text-size-2">About the Davis Night Market</h2>
        <h3 className="text-size-3">
          Sustainable Practices to Fight Food Insecurity and waste
        </h3>
      </div>
      <div className="about__item">
        <img src={Group} alt="About Pic" className="about__img" />
        <div className="about__text">
          <h3 className="text-size-3">
            The Davis Night Market was established in 2019 in Davis, CA.
          </h3>
          <p className="text-size-4">
            Our mission is to reduce food waste and increase food security in
            Davis while fostering a sense of community.
          </p>
        </div>
      </div>
    </div>
  );
}
