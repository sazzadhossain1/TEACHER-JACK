import React from "react";
import "./FirstTwocartSection.css";
import learningPhotoOne from "../../accets/Images/learning-photo/learning-photo-one.jpg";
import learningPhotoTwo from "../../accets/Images/learning-photo/learning-photo-two.jpg";

const FirstTwocartSection = () => {
  return (
    <div className="firstTwoCartSection-grid-div">
      <div className="single-cart">
        <img className="learning-photo" src={learningPhotoOne} alt="" />
        <div className="cart-text-div">
          <h3 className="cart-heading">
            Your guide on how to invest as <br /> teenager
          </h3>
          <button className="read-more">Read More</button>
        </div>
      </div>
      <div className="single-cart">
        <img className="learning-photo" src={learningPhotoTwo} alt="" />
        <div className="cart-text-div">
          <h3 className="cart-heading">
            Your guide on how to invest as <br /> teenager
          </h3>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FirstTwocartSection;
