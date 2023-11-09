import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import EarnOnlineJob from "../EarnOnlineJob/EarnOnlineJob";

import NeedToConsult from "../NeedToConsult/NeedToConsult";

import HeroDetailsPage from "../HeroDetailsPage/HeroDetailsPage";
import { Link } from "react-router-dom";
import AffiliateMarketing from "../AffiliateMarketing/AffiliateMarketing";

const Home = () => {
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
