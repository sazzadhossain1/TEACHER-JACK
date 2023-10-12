import React from "react";
import "./EarnOnlineJob.css";
import workWithClock from "../../accets/Images/work-with-clock.jpg";
import girlWithLaptop from "../../accets/Images/girl-with-laptop.jpg";
import { Link } from "react-router-dom";

const EarnOnlineJob = () => {
  return (
    <div className="earnOnlineJob-parent-div">
      <div className="earnOnlineJob-grid-div">
        <div>
          <div className="earnOnlineJob-flex-div">
            <h2 className="earn-online-job">
              EARN ONLINE <br /> JOB VACANCIES
            </h2>
            <div className="earn-online-job-blank-div"></div>
          </div>
          <h3 className="anOpportunity">An Opportunity to</h3>
          <h2 className="earnMoneyFrom">
            Earn Money <br /> from Home.
          </h2>
          <p className="earnOnlineJob-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            deleniti adipisci id, at pariatur, impedit neque omnis, sunt dolorem
            cumque quasi error eos repudiandae veniam!
          </p>
          <Link to="/signUP">
            <button className="signUpNow-btn">
              SIGN UP NOW <i class="fa-solid fa-angle-right"></i>
            </button>
          </Link>
        </div>
        <div>
          <img className="img" src={workWithClock} alt="" />
          {/* <img src={girlWithLaptop} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default EarnOnlineJob;
