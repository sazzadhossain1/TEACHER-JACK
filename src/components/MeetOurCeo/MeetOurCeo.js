import React from "react";
import "./MeetOurCeo.css";
import CEOPhoto from "../../accets/Images/CEO-photo/CEO-Photo.png";
import { Link } from "react-router-dom";

const MeetOurCeo = () => {
  return (
    <div className="ceo-main-parent-div">
      <div className="meetOurCeo-grid-div">
        <div className="first-ceo-img-div">
          <img src={CEOPhoto} alt="" />
        </div>
        <div className="meetOurCeo-text-div">
          <h3 className="teacher-jack-ceo">TEACHER JACK</h3>
          <p className="ceo-expert-p">Trainer, IT Business Person</p>
          <p className="ceo-text-p">
            TESOL Certified, ELT Teacher Jack is experienced and has taught
            English to students from China, South Korea, Mexico, Canada and the
            United States of America over the last 8 years. Teacher Jack is
            friendly, helpful, open minded and affordable. He goes the extra
            mile to ensure student understanding of the lessons. He travels a
            lot and interacts with people from different background. He is
            knowledgeable and knows exactly which student requires what level of
            training. He is easily reachable and is always ready to
            help his students.
          </p>

          <Link to="/">
            <button className="ceo-learn-more-btn">Back to HOME</button>
          </Link>
        </div>
        <div className="second-ceo-img-div">
          <img src={CEOPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MeetOurCeo;
