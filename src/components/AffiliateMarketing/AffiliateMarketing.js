import React from "react";
import "./AffiliateMarketing.css";
import { Link } from "react-router-dom";

const AffiliateMarketing = () => {
  return (
    <div className="AffiliateMarketing-div">
      <h3 className="AffiliateMarketing-heading">
        আমাদের Affiliate Program -এ জয়েন করুন। <br /> ইনকাম এবং দক্ষতা
        একিসাথে বৃদ্ধি করুন।&nbsp;
        <Link to="/affiliateProgram" className="click_here">
          Click here...
        </Link>
      </h3>
    </div>
  );
};

export default AffiliateMarketing;
