import React from "react";
import "./MakeMoneyOnlineToday.css";
import earningPhoto from "../../accets/Images/earning-photo/earning-photo.jpg";

const MakeMoneyOnlineToday = () => {
  return (
    <div className="makeMoneyOnlineToday-parent-div">
      <div className="makeMOneyOnlineToday-first-text-div">
        <h1 className="makeMOneyOnlineToday-heading">
          Step 4: “Job Preparation Guideline”
        </h1>
        <p className="makeMOneyOnlineToday-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est repellat
          nostrum quisquam cum delectus similique. Nulla, veniam. Qui quisquam
          quia maiores impedit quis, cum repudiandae illum praesentium maxime!
          In, laborum.
        </p>
      </div>

      <div className="makeMoneyOnlineToday-grid-div">
        <img className="makeMoneyOnline-img" src={earningPhoto} alt="" />
        <div>
          <div className=" makeMoneyOnlineToday-flex-div">
            <i className="fa-solid fa-right-long"></i>
            <p>Have a smartphone, stay online everyday</p>
          </div>
          <div className=" makeMoneyOnlineToday-flex-div">
            <i className="fa-solid fa-right-long"></i>
            <p>Have a smartphone, stay online everyday</p>
          </div>
          <div className=" makeMoneyOnlineToday-flex-div">
            <i className="fa-solid fa-right-long"></i>
            <p>Have a smartphone, stay online everyday</p>
          </div>
          <div className=" makeMoneyOnlineToday-flex-div">
            <i className="fa-solid fa-right-long"></i>
            <p>Have a smartphone, stay online everyday</p>
          </div>
          <button className="start-earning-now-btn">Start Earning Now</button>
        </div>
      </div>
    </div>
  );
};

export default MakeMoneyOnlineToday;
