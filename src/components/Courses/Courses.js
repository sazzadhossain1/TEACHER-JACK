import React from "react";
import EarnFromYourAnswers from "../EarnFromYourAnswers/EarnFromYourAnswers";
import TryTodayOurTreat from "../TryTodayOurTreat/TryTodayOurTreat";
import OurCourses from "../OurCourses/OurCourses";
import MakeMoneyOnlineToday from "../MakeMoneyOnlineToday/MakeMoneyOnlineToday";
import SkillsforJobProgramGroup from "../SkillsforJobProgramGroup/SkillsforJobProgramGroup";
import SpecialCourses from "../SpecialCourses/SpecialCourses";

const Courses = () => {
  return (
    <div>
      <TryTodayOurTreat></TryTodayOurTreat>
      <OurCourses></OurCourses>
      <MakeMoneyOnlineToday></MakeMoneyOnlineToday>
      <SkillsforJobProgramGroup></SkillsforJobProgramGroup>
      <EarnFromYourAnswers></EarnFromYourAnswers>
      <SpecialCourses></SpecialCourses>
    </div>
  );
};

export default Courses;
