import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import EarnOnlineJob from "../EarnOnlineJob/EarnOnlineJob";

import NeedToConsult from "../NeedToConsult/NeedToConsult";

import HeroDetailsPage from "../HeroDetailsPage/HeroDetailsPage";
import AffiliateMarketing from "../AffiliateMarketing/AffiliateMarketing";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const getProductData_fromApi = useLoaderData();
  // console.log(getProductData_fromApi);

  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;

  return (
    <div>
      {/* {getProductData_fromApi.data.map((data) => (
        <HeroSection key={data.id} data={data}></HeroSection>
      ))} */}

      <HeroSection></HeroSection>
      <AffiliateMarketing></AffiliateMarketing>
      <EarnOnlineJob></EarnOnlineJob>

      <HeroDetailsPage></HeroDetailsPage>
      <NeedToConsult></NeedToConsult>
    </div>
  );
};

export default Home;
