import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import EarnOnlineJob from "../EarnOnlineJob/EarnOnlineJob";
import EarnFromYourAnswers from "../EarnFromYourAnswers/EarnFromYourAnswers";
import FirstTwocartSection from "../FirstTwocartSection/FirstTwocartSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <EarnOnlineJob></EarnOnlineJob>
      <EarnFromYourAnswers></EarnFromYourAnswers>
      <FirstTwocartSection></FirstTwocartSection>
    </div>
  );
};

export default Home;
