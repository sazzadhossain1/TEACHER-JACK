import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import EarnOnlineJob from "../EarnOnlineJob/EarnOnlineJob";
import EarnFromYourAnswers from "../EarnFromYourAnswers/EarnFromYourAnswers";
import FirstTwocartSection from "../FirstTwocartSection/FirstTwocartSection";
import TryTodayOurTreat from "../TryTodayOurTreat/TryTodayOurTreat";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <EarnOnlineJob></EarnOnlineJob>
      <EarnFromYourAnswers></EarnFromYourAnswers>
      <FirstTwocartSection></FirstTwocartSection>
      <TryTodayOurTreat></TryTodayOurTreat>
    </div>
  );
};

export default Home;
