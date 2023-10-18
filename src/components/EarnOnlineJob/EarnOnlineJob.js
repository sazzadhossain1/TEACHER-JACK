import React from "react";
import "./EarnOnlineJob.css";
import খুবসহজেধাপেধাপে from "../../accets/Images/খুবসহজেধাপেধাপে/খুবসহজেধাপেধাপে.png";
import { Link } from "react-router-dom";

const EarnOnlineJob = () => {
  return (
    <div className="earnOnlineJob-parent-div">
      <div className="earnOnlineJob-grid-div">
        <div className="earnOnlineJob-text-div">
          <div className="earnOnlineJob-flex-div">
            <h2 className="earn-online-job">
              খুব সহজে ধাপে ধাপে কিভাবে <br /> রিমোট জব বা ফ্রিল্যান্সিং করবেন?
            </h2>
            <div className="earn-online-job-blank-div"></div>
          </div>
          <p className="step-p">Step 1: “Remote Job” বইটি পড়ে শেষ করুন।</p>
          <p className="step-p">
            Step 2: “Basic English Communication” কোর্সটি শেষ করুন।
          </p>
          <p className="step-p">
            Step 3: “Core Skills” Section থেকে যে কোন একটি কোর্স শেষ করুন।
          </p>
          <p className="step-p">
            Step 4: “Job Preparation Guideline” টি পড়ে শেষ করুন।
          </p>
          <p className="step-p">
            {" "}
            Step 5: “FB Group-এ প্রশ্ন-উত্তর সেশনে join করুন।
          </p>
          <p className="step-p">
            Step 6: আমাদের দেখিয়ে দেয়া জায়গাগুলোতে কাজের জন্য Apply করুন
          </p>

          <p className="earnOnlineJob-p">
            রিমোট জব/ফ্রিল্যান্সিং করে সাধারণ একজন ব্যাক্তি সর্বনিম্ন কয়েক হাজার
            টাকা থেকে শুরু করে ১ বছরের মধ্যে ৩০,০০০ থেরে ৪০,০০০ টাকা সহজেই ইনকাম
            করতে পারে। চোখ কান খোলা থাকলে এবং একটু বেশী পরিশ্রমী হলে আরো বেশী
            ইনকাম করতে পারে।
          </p>
          <Link to="/stepDetailsPage">
            <button className="signUpNow-btn">
              বিস্তারিত.. <i class="fa-solid fa-angle-right"></i>
            </button>
          </Link>
        </div>
        <div className="earnOnlineJob-img-div">
          <img className="earnOnlineJob-img" src={খুবসহজেধাপেধাপে} alt="" />
          {/* <img src={girlWithLaptop} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default EarnOnlineJob;
