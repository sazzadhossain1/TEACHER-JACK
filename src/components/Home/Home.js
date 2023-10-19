import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import EarnOnlineJob from "../EarnOnlineJob/EarnOnlineJob";
import EarnFromYourAnswers from "../EarnFromYourAnswers/EarnFromYourAnswers";
import FirstTwocartSection from "../FirstTwocartSection/FirstTwocartSection";
import TryTodayOurTreat from "../TryTodayOurTreat/TryTodayOurTreat";
import MakeMoneyOnlineToday from "../MakeMoneyOnlineToday/MakeMoneyOnlineToday";
import OurCourses from "../OurCourses/OurCourses";
import Testimonials from "../Testimonials/Testimonials";
import PaymentSystem from "../PaymentSystem/PaymentSystem";
import HowToEnroll from "../HowToEnroll/HowToEnroll";
import MediaButton from "../MediaButton/MediaButton";
import BuyTheBook from "../BuyTheBook/BuyTheBook";
import SpecialCourses from "../SpecialCourses/SpecialCourses";
import SkillsforJobProgramGroup from "../SkillsforJobProgramGroup/SkillsforJobProgramGroup";
import JobHuntStep from "../JobHuntStep/JobHuntStep";
import NeedToConsult from "../NeedToConsult/NeedToConsult";
import BusinessScopes from "../BusinessScopes/BusinessScopes";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BuyTheBook></BuyTheBook>
      <EarnOnlineJob></EarnOnlineJob>
      <EarnFromYourAnswers></EarnFromYourAnswers>
      {/* <FirstTwocartSection></FirstTwocartSection> */}
      <TryTodayOurTreat></TryTodayOurTreat>
      <OurCourses></OurCourses>
      <MakeMoneyOnlineToday></MakeMoneyOnlineToday>
      <SkillsforJobProgramGroup></SkillsforJobProgramGroup>
      <JobHuntStep></JobHuntStep>
      <NeedToConsult></NeedToConsult>
      <SpecialCourses></SpecialCourses>
      <BusinessScopes></BusinessScopes>
      <Testimonials></Testimonials>
      <HowToEnroll></HowToEnroll>
      <PaymentSystem></PaymentSystem>
      <MediaButton></MediaButton>
    </div>
  );
};

export default Home;
