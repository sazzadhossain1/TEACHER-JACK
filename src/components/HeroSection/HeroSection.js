import React from "react";
import "./HeroSection.css";
import heroBookCoverPhoto from "../../accets/Images/hero-section-photo/BookCoverPage.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import RemoteJobBookDownload from "../RemoteJobBookDownload/RemoteJobBookDownload";

const HeroSection = () => {
  return (
    <div className="hero-main-div">
      <div className="hero-child-div">
        <h1 className="hero-first-heading">
          {" "}
          রিমোট জব বা ফ্রিল্যন্সিং এর সঠিক তথ্য জানুন
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
                  <p className="hero-p-text">চাকুরীপ্রার্থী গ্র্যাজুয়েট?</p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text">
                    হাই স্কুল, কলেজ পড়ুয়া শিক্ষার্থী?
                  </p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text">
                    চাকুরীজীবী কিছু বাড়তি আয়ের সন্ধানে?
                  </p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text"> অবসরপ্রাপ্ত ব্যাক্তি? </p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text">গৃহিণী?</p>
                </div>
                <div className="hero-font-awesome-icon-div">
                  <FontAwesomeIcon icon={faRightLong} />
                  <p className="hero-p-text last-second-p">
                    এবং আপনি চাচ্ছেন আপনার আয়-রোজগার বাড়াতে?
                  </p>
                </div>
                <p className="hero-p-text-last">
                  তাহলে এই প্রোগ্রামটি আপনার জন্য অর্থনৈতিক মুক্তি পেতে এই
                  প্রোগ্রামটি ফলো করুন।
                </p>
              </div>
            </div>

            <RemoteJobBookDownload></RemoteJobBookDownload>
          </div>
          <div className="heroBookCoverPhoto-dvi">
            <img
              className="heroBookCoverPhoto-img"
              src={heroBookCoverPhoto}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
