import React from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
import CEOPhoto from "../../accets/Images/CEO-photo/CEO-Photo.png";

const Faq = () => {
  return (
    <div className="ceo-main-parent-div">
      <div className="meetOurCeo-grid-div">
        <div className="meetOurCeo-text-div">
          <h3 className="teacher-jack-ceo">FAQ</h3>

          <div className="p_photo_grid_div">
            <div>
              <p className="ceo-text-p">
                This page is being updated as we speak
              </p>
              <p className="ceo-text-p"></p>
              <p className="ceo-text-p"></p>
              <p className="ceo-text-p"></p>
              <p className="ceo-text-p"></p>

              <p className="ceo-text-p"></p>
              <p className="ceo-text-p"></p>
            </div>

            <div className="first-ceo-img-div">
              <img src={CEOPhoto} alt="" />
            </div>
          </div>

          <p className="ceo-text-p"></p>
          <p className="ceo-text-p"></p>

          <p className="Disclaimer"></p>

          <Link to="/">
            <button className="ceo-learn-more-btn">Back to Home</button>
          </Link>
        </div>
        <div className="second-ceo-img-div">
          <img src={CEOPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
