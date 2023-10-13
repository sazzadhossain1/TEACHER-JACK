import React from "react";
import "./HowToEnroll.css";

const HowToEnroll = () => {
  return (
    <div className="HowToEnroll-parent-div">
      <h1 className="HowToEnroll-heading"> How To Enroll</h1>

      <div className="howToEnroll-grid-div">
        <div className="howToEnroll-text-div">
          <p className="what-you-have">আপনার যা যা থাকতে হবেঃ</p>

          <div className="howToEnroll-flex-div">
            <i class="fa-solid fa-computer"></i>
            <p>কম্পিউটার/ল্যাপটপ</p>
          </div>
          <div className="howToEnroll-flex-div">
            <i class="fa-brands fa-internet-explorer"></i>
            <p>ভালো ইন্টারনেট কানেকশন</p>
          </div>
          <div className="howToEnroll-flex-div">
            <i class="fa-solid fa-brain"></i>
            <p>ইচ্ছা শক্তি ও পরিশ্রম করার দৃঢ় মনোবল</p>
          </div>
          <div className="howToEnroll-flex-div">
            <i class="fa-solid fa-check"></i>
            <p>ক্লাস সংখ্যা: ৬৫+ টি</p>
          </div>
          <div className="howToEnroll-flex-div">
            <i class="fa-solid fa-check"></i>
            <p>মেয়াদ কালঃ প্রায় ৩ মাস</p>
          </div>
          <div className="howToEnroll-flex-div">
            <i class="fa-solid fa-check"></i>
            <p>কোর্স ফিঃ ৭০০০ টাকা</p>
          </div>
          <div className="howToEnroll-flex-div">
            <i class="fa-solid fa-check"></i>
            <p>ক্লাস হবেঃ জুমে ( রবি,মংগল ও বৃহসঃপতি বার- রাত ৯.৩০ মিনিটে)</p>
          </div>
        </div>
        <div>
          <iframe
            className="howToEnroll-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o-3Vb5qPon0?si=wrCipth7wNQtRsOS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HowToEnroll;
