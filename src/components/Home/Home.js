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

      <p className="home-fb-group-heading">
        <Link
          className="fb-group-btn"
          target="_blank"
          to="https://www.facebook.com/groups/3127566597539398?_rdc=1&_rdr"
        >
          “Facebook Group
        </Link>
        - এ Join করুন।
      </p>
    </div>
  );
};

export default Home;

// https://bd.teacherjackonline.com/
// Host: ftp.teacherjackonline.com
// User: u721601174.Sazzad_admin
// Pass: FTPAdmin4teacherjack
