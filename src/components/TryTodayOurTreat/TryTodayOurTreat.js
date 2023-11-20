import React from "react";
import "./TryTodayOurTreat.css";
import { Link } from "react-router-dom";

const TryTodayOurTreat = () => {
  return (
    <div className="tryTodayTreat-main-parent-div">
      <h1 className="construction">
        This Courses Page is under construction. Pls check back periodically.
      </h1>
      <div className="tryTodayTreat-parent-div">
        <div>
          <h1 className="step-two">Step 2</h1>
          <h1 className="tryToday">
            Mandatory Course - “Basic English Communication” কোর্স (Basic Level){" "}
            <br /> <span className="six-month">(6-month Course)</span>
          </h1>
          <div className="try_today_p_div">
            {/* <p className="six-month">(6-month Course)</p> */}
            <p className="tryTodayTreat-p">30+ Modules</p>
            <p className="tryTodayTreat-p">30 Modules (150+ videos) </p>
            <p className="tryTodayTreat-p">Each Module Costs 150 tk</p>
            <p className="tryTodayTreat-p"> Entire Course: 4500 tk </p>
            <p className="tryTodayTreat-p">
              After Discount with Coupon: 3700 tk
            </p>
          </div>
        </div>
        <Link to="/basicEnglishCommunication">
          <button className="step_six_buy_now_btn ">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default TryTodayOurTreat;
