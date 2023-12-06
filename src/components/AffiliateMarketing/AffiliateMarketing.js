import React from "react";
import "./AffiliateMarketing.css";
import { Link } from "react-router-dom";

const AffiliateMarketing = () => {
  return (
    <div className="AffiliateMarketing-div">
      <h3 className="AffiliateMarketing-heading">
        আমাদের Affiliate Program -এ জয়েন করে এখনই ইনকাম করুন এবং দক্ষতাও বৃদ্ধি
        করুন  &nbsp;
        <Link to="/affiliateProgram" className="click_here">
          Click here...
        </Link>
      </h3>
    </div>
  );
};

export default AffiliateMarketing;
