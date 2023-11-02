import React from "react";
import "./SkillsforJobProgramGroup.css";
import { Link } from "react-router-dom";
import StepFivePhoto from "../../accets/Images/steps-five-photo/StepFivePhoto.jpg";

const SkillsforJobProgramGroup = () => {
  return (
    <div>
      <h1 className="SkillsforJobProgramGroup-heading">
        Step 5: Join 'Skills for Job Program' 
        <Link
          className="SkillsforJobProgramGroup-Link"
          to="https://web.facebook.com/groups/3127566597539398"
          target="_blank"
        >
          Group
        </Link>
      </h1>
      <div className="StepFivePhoto-div">
        <img className="StepFivePhoto" src={StepFivePhoto} alt="" />
      </div>
    </div>
  );
};

export default SkillsforJobProgramGroup;
