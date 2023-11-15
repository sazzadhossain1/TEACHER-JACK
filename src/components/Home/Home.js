import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import EarnOnlineJob from "../EarnOnlineJob/EarnOnlineJob";

import NeedToConsult from "../NeedToConsult/NeedToConsult";

import HeroDetailsPage from "../HeroDetailsPage/HeroDetailsPage";
import AffiliateMarketing from "../AffiliateMarketing/AffiliateMarketing";

const Home = () => {
  // For Safari
  document.body.scrollTop = 0;

  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div>
      <HeroSection></HeroSection>
      <AffiliateMarketing></AffiliateMarketing>
      <EarnOnlineJob></EarnOnlineJob>

      <HeroDetailsPage></HeroDetailsPage>
      <NeedToConsult></NeedToConsult>
    </div>
  );
};

export default Home;
