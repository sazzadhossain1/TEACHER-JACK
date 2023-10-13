import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import EarnOnlineJob from "../EarnOnlineJob/EarnOnlineJob";
import EarnFromYourAnswers from "../EarnFromYourAnswers/EarnFromYourAnswers";
import FirstTwocartSection from "../FirstTwocartSection/FirstTwocartSection";
import TryTodayOurTreat from "../TryTodayOurTreat/TryTodayOurTreat";
import MakeMoneyOnlineToday from "../MakeMoneyOnlineToday/MakeMoneyOnlineToday";
import OurCourses from "../OurCourses/OurCourses";
import MeetOurCeo from "../MeetOurCeo/MeetOurCeo";
import Testimonials from "../Testimonials/Testimonials";
import PaymentSystem from "../PaymentSystem/PaymentSystem";
import HowToEnroll from "../HowToEnroll/HowToEnroll";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <EarnOnlineJob></EarnOnlineJob>
      <EarnFromYourAnswers></EarnFromYourAnswers>
      <FirstTwocartSection></FirstTwocartSection>
      <TryTodayOurTreat></TryTodayOurTreat>
      <MakeMoneyOnlineToday></MakeMoneyOnlineToday>
      <OurCourses></OurCourses>
      <MeetOurCeo></MeetOurCeo>
      <Testimonials></Testimonials>
      <HowToEnroll></HowToEnroll>
      <PaymentSystem></PaymentSystem>
    </div>
  );
};

export default Home;
