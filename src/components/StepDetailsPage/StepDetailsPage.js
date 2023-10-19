import React from "react";
import "./StepDetailsPage.css";
import { Link } from "react-router-dom";
import bannerOne from "../../accets/Images/Step-details-page-photo/bannerOne.jpg";
import bannerTwo from "../../accets/Images/Step-details-page-photo/bannerTwo.jpg";
import RemoteJobBook from "../../accets/Images/Step-details-page-photo/RemoteJobBook.jpg";
import BasicEnglishCommunication from "../../accets/Images/Step-details-page-photo/BasicEnglishCommunication.jpg";

import CoreSkills from "../../accets/Images/Step-details-page-photo/CoreSkills.jpg";

import JobPreparationGuideline from "../../accets/Images/Step-details-page-photo/JobPreparationGuideline.jpg";

import facebookSkill from "../../accets/Images/Step-details-page-photo/facebookSkill.jpg";

import skillDevelopment from "../../accets/Images/Step-details-page-photo/skillDevelopment.jpg";

import companyOpening from "../../accets/Images/Step-details-page-photo/companyOpening.jpg";

const StepDetailsPage = () => {
  return (
    <div className="stepDetailsPage-div">
      <img className="stepDetailsPage-banner-photo" src={bannerOne} alt="" />
      <p className="stepDetailsPage-p">
        এ্যাফিলিয়েট প্রোগ্রামের মাধ্যমে টাকা ইনকাম করুন। একই সাথে এই বইয়ে
        উল্লেখিত কোর্সে সময় দিন। আগামী ৫ – ৬ মাস প্রতিদিন মিনিমাম ৩-৪ ঘন্টা সময়
        দিন, তবেই আপনি একটি ভালো ফল পাবেন ইনশাআল্লাহ। আমরা এই Skills for Job
        Program টি এমনভাবে তৈরি করেছি যাতে গ্রামে বসে থাকা একজন চাকুরীপ্রার্থী
        বা ছাত্র-ছাত্রী থেকে শুরু করে ঢাকার ইংলিশ মিডিয়ামের সুপার এফিশিয়েন্ট
        একজন student রাও যেনো এতে অংশগ্রহণ করতে পারে এবং একটি Future গড়ে তুলতে
        পারে।
      </p>
      <div className="stepDetailsPage-stepOne-flex-div">
        <div className="">
          <p className="common-step-p">Step 1:</p>
          <div className="stepDetailsPage-common-blank-div"></div>
          <p className="stepDetailsPage-step-p">
            “Remote Job” বইটি পড়ে শেষ করুন। Personal Grooming এর জন্য এই বইটি
            অত্যন্ত গুরুত্বপূর্ণ। দীর্ঘ ১২ বছর America য় থেকে, কাজ করে, হাজার
            হাজার ডলার খরচ করে আমার অভিজ্ঞতার আলোকে আমি এই বইটিতে আপনাকে সঠিক
            একটি গাইডলাইন দেয়ার চেষ্টা করেছি যা আপনি সাধারণত কোথাও পাবেন না।
            বইটি এখান থেকে সংগ্রহ করুন:
            <Link
              to="https://bd.teacherjackonline.com/"
              target="blank"
              className="navigate-site-sink"
            >
              bd.teacherjackonline.com
            </Link>
          </p>
        </div>
        <div className="remoteJobBook-img-div">
          <img className="remoteJobBook-img" src={RemoteJobBook} alt="" />
        </div>
      </div>

      <div className="stepDetailsPage-stepTwo-flex-div">
        <div>
          <p className="common-step-p">Step 2:</p>
          <div className="stepDetailsPage-common-blank-div"></div>
          <p className="stepDetailsPage-step-p">
            “Basic English Communication” কোর্সটি সংগ্রহ করুন এবং এটি শেষ করুন।
            প্রতিদিন কমবেশী ২ ঘন্টা সময় দিন। প্রতিটি সেকশনে নিজেকে Test করুন এবং
            অতপর পুরোপুরি বোঝা হলে পরের সেকশনে যান। “Basic English
            Communication” কোর্সটি আপনি ধাপে ধাপে অল্প অল্প করে কিংবা সব সেকশন
            একবারে সংগ্রহ করতে পারবেন। এই কোর্সটিতে ৩০+ টি মডিউল (সেকশন) রয়েছে।
            কোর্সটি এখান থেকে সংগ্রহ করুন:{" "}
            <Link
              to="https://bd.teacherjackonline.com/"
              target="blank"
              className="navigate-site-sink"
            >
              bd.teacherjackonline.com
            </Link>{" "}
            *Mandatory - English Communication Development (Basic Level) 30+
            Modules 30 Modules (150 videos) Each Module Costs 120 tk Entire
            Course 30 modules x 120tk = 3600 tk
          </p>
        </div>
        <div className="basicEnglishCommunication-img-div">
          <img
            className="basicEnglishCommunication-img"
            src={BasicEnglishCommunication}
            alt=""
          />
        </div>
      </div>

      <div className="stepDetailsPage-stepThree-flex-div">
        <div>
          <p className="common-step-p">Step 3:</p>
          <div className="stepDetailsPage-common-blank-div"></div>
          <p className="stepDetailsPage-step-p">
            “Core Skills” Section থেকে যে কোন একটি কোর্স সংগ্রহ করুন এবং এটি শেষ
            করুন। প্রতিদিন কমবেশী ২-৩ ঘন্টা সময় দিন। কোর্সটি এখান থেকে সংগ্রহ
            করুন :
            <Link
              to="https://bd.teacherjackonline.com/"
              target="blank"
              className="navigate-site-sink"
            >
              bd.teacherjackonline.com
            </Link>
          </p>
        </div>
        <div className="core-skill-img-div">
          <img className="core-skill-img" src={CoreSkills} alt="" />
        </div>
      </div>

      <div className="stepDetailsPage-stepFour-flex-div">
        <div>
          <p className="common-step-p">Step 4:</p>
          <div className="stepDetailsPage-common-blank-div"></div>
          <p className="stepDetailsPage-step-p">
            “Job Preparation Guideline” টি সংগ্রহ করুন এবং এটি পড়ে শেষ করুন।
            এখান থেকে সংগ্রহ করুন :
            <Link
              to="https://bd.teacherjackonline.com/"
              target="blank"
              className="navigate-site-sink"
            >
              bd.teacherjackonline.com
            </Link>
          </p>
        </div>
        <div className="jobPrepatarion-img-div">
          <img
            className="jobPrepatarion-img"
            src={JobPreparationGuideline}
            alt=""
          />
        </div>
      </div>

      <div className="stepDetailsPage-stepFive-flex-div">
        <div>
          <p className="common-step-p">Step 5:</p>
          <div className="stepDetailsPage-common-blank-div"></div>
          <p className="stepDetailsPage-step-p">
            “Facebook-এ আমার Skills for Job Program Group-এ join করুন যেখানে
            আপনাদের অনেক প্রশ্নের উত্তর দেয়া হবে।
            <Link
              to="https://www.facebook.com/groups/3127566597539398"
              target="blank"
              className="navigate-site-sink"
            >
              Facebook Group
            </Link>
          </p>
        </div>
        <div className="facebookGroup-img-div">
          <img className="facebookGroup-img" src={facebookSkill} alt="" />
        </div>
      </div>

      <div className="stepDetailsPage-stepSix-flex-div">
        <div>
          <p className="common-step-p"> Step 6:</p>
          <div className="stepDetailsPage-common-blank-div"></div>
          <p className="stepDetailsPage-step-p">
            “Skill Development” হয়ে গেলে আপনি International Standard এর একজন
            work seeker বা job seeker বা Freelancer. এখন থেকে শুরু হবে আপনার
            কাজের দিগন্ত। আপনি আমাদের দেখিয়ে দেয়া জায়গাগুলোতে কাজের জন্য Apply
            করবেন।
          </p>
        </div>
        <div className="skillDevelopment-img-div">
          <img className="skillDevelopment-img" src={skillDevelopment} alt="" />
        </div>
      </div>

      <div className="stepDetailsPage-stepSeven-flex-div">
        <div>
          <p className="common-step-p">Step 7:</p>
          <div className="stepDetailsPage-common-blank-div"></div>
          <p className="stepDetailsPage-step-p">
            আমাদের নিজস্ব Company তে যে opening গুলো আছে সেগুলোতে আপনার Skill বা
            Work Section অনুসারে Apply করুন। আমাদের Online / Offline / Hybrid –
            সবগুলো Mode এই employees প্রয়োজন হয়। এগুলো সম্পর্কে জানতে এই
            ভিডিওগুলো দেখুন -
          </p>
        </div>
        <div className="companyOpening-img-div">
          <img className="companyOpening-img" src={companyOpening} alt="" />
        </div>
      </div>
      <p className="stepDetailsPage-last-p">
        আমাদের Company তে যারা যারা Selected হবেন তাদেরকে ফ্রি প্রডাক্ট নলেজ
        ট্রেইনিং দেয়া হবে। বাস্তব কথা হলো – এই প্রসেসগুলো শেষ হলে সাধারণ একজন
        ব্যাক্তি সর্বনিম্ন কয়েক হাজার টাকা থেকে শুরু করে ১ বছরের মধ্যে ৩০,০০০
        থেরে ৪০,০০০ টাকা সহজেই ইনকাম করতে পারে। চোখ কান খোলা থাকলে এবং একটু বেশী
        পরিশ্রমী হলে আরো বেশী ইনকাম করতে পারে।
      </p>
    </div>
  );
};

export default StepDetailsPage;
