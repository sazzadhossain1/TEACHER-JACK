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
import MediaButton from "../MediaButton/MediaButton";
import BuyTheBook from "../BuyTheBook/BuyTheBook";
import SpecialCourses from "../SpecialCourses/SpecialCourses";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BuyTheBook></BuyTheBook>
      <EarnOnlineJob></EarnOnlineJob>
      <EarnFromYourAnswers></EarnFromYourAnswers>
      <FirstTwocartSection></FirstTwocartSection>
      <TryTodayOurTreat></TryTodayOurTreat>
      <MakeMoneyOnlineToday></MakeMoneyOnlineToday>
      <OurCourses></OurCourses>
      {/* <SpecialCourses></SpecialCourses> */}
      <MeetOurCeo></MeetOurCeo>
      <Testimonials></Testimonials>
      <HowToEnroll></HowToEnroll>
      <PaymentSystem></PaymentSystem>
      <MediaButton></MediaButton>
    </div>
  );
};

export default Home;
