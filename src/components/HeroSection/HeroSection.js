import React from "react";
import "./HeroSection.css";
import heroBookCoverPhoto from "../../accets/Images/hero-section-photo/BookCoverPage.jpg";
import heroBookCoverPhotoTwo from "../../accets/Images/hero-section-photo/BookCoverPageTwo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import RemoteJobBookDownload from "../RemoteJobBookDownload/RemoteJobBookDownload";

const HeroSection = () => {
  return (
    <div className="hero-main-div">
      <div className="hero-child-div">
        <h1 className="hero-first-heading">
          রিমোট জব বা ফ্রিল্যান্সিং এর সঠিক তথ্য জানুন
        </h1>
        <div className="hero-grid-div">
          <div className="learn-more-btn-and-text-div">
            <div className="hero-text-div">
              <h3 className="hero-second-text-heading">
                “Skills for Job Program”
              </h3>
              <h2 className="hero-teacher-jack">আপনি কি একজন</h2>

              <div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text">চাকুরিপ্রার্থী ব্যক্তি ?</p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text">স্কুল, কলেজ পড়ুয়া শিক্ষার্থী ?</p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text hero_p_text_third">
                    যেকোন পেশায় চাকুরিরত কিন্তু কিছু বাড়তি আয় করতে চান ?
                  </p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text"> অবসরপ্রাপ্ত ব্যক্তি? </p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text">গৃহিণী ?</p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text hero_p_text_last">
                    কিছুটা বাংলা বা ইংরেজি পড়তে পারেন এবং একটি স্মার্টফোন আছে
                  </p>
                </div>

                <div className="hero-p-text-last">
                  <p>
                    আপনি আপনার আয়-রোজগার বাড়াতে চাচ্ছেন কিন্তু কিভাবে তা করবেন
                    সেটির সঠিক কোন গাইডলাইন পাচ্ছেন না।
                  </p>

                  <p className="margin_t">তাহলে এই বইটি আপনার জন্য জরুরি।</p>
                </div>
              </div>
            </div>

            <RemoteJobBookDownload></RemoteJobBookDownload>
          </div>
          <div className="heroBookCoverPhoto-dvi">
            <img
              className="heroBookCoverPhoto-img"
              src={heroBookCoverPhotoTwo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
