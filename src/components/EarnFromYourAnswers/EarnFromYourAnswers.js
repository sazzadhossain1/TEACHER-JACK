import React from "react";
import "./EarnFromYourAnswers.css";
import dataSendPhoto from "../../accets/Images/data-send-photo.jpg";

const EarnFromYourAnswers = () => {
  return (
    <div className="earnFromYourAnswers-grid-div">
      <div>
        <h3 className="earn-from-your-answer">EARN FROM YOUR ANSWERS</h3>
        <h2 className="get-up-to">Get up to $2.5 per answer</h2>
        <p className="earnFromYourAnswers-p">✅ Fun and free to join</p>
        <p className="earnFromYourAnswers-p">✅ Fast and easy payment</p>
        <button className="start-earning-here-btn">
          START EARNING HERE <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div>
        <img className="dateSendPhoto" src={dataSendPhoto} alt="" />
      </div>
    </div>
  );
};

export default EarnFromYourAnswers;
