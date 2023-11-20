import React from "react";
import "./SkillsforJobProgramGroup.css";
import { Link } from "react-router-dom";
import StepFivePhoto from "../../accets/Images/steps-five-photo/StepFivePhoto.jpg";

const SkillsforJobProgramGroup = () => {
  return (
    <div className="sills_for_job_program_group_parent_div">
      <h1 className="step_five">Step 5</h1>
      <h1 className="SkillsforJobProgramGroup-heading">
        Join 'Skills for Job Program' 
        <Link
          className="SkillsforJobProgramGroup-Link"
          to="/jobOpportunities"
          target="_blank"
        >
          {" "}
          <br />
          <button className="NeedToConsult-btn margin_top">
            আমাদের Job Opportunities page- এ এবং অন্যান্য দেখিয়ে দেয়া
            জায়গাগুলোতে কাজের জন্য Apply করুন
          </button>
        </Link>
      </h1>
    </div>
  );
};

export default SkillsforJobProgramGroup;
