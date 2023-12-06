import React from "react";
import "./AffiliateProgram.css";
import { Link } from "react-router-dom";
import CEOPhoto from "../../accets/Images/CEO-photo/CEO-Photo.png";
import AffiliateMarketingImg from "../../accets/Images/AffiliateMarketingImg/AffiliateMarketingImg.jpg";
import teacherJack from "../../accets/Images/teacher-jack/teacherJack.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AffiliateProgram = () => {
  const id = +localStorage.getItem("bookDataId");
  // console.log(typeof id, id);

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  return (
    <div>
      <div>
        <div className="bookInfo-grid-div">
          <div className="bookInfo-left-side-div">
            <h1 className="bookInfo-heading">Affiliate Marketing Guideline</h1>
            <p className="bookInfo-p">
              Affiliate Marketing করে সহজেই ইনকাম শুরু করতে পারেন। আমাদের
              প্রোগ্রামের সাথে যুক্ত হয়ে ইনকাম শুরু করতে চাইলে
              bd.teacherjackonline.com - এই ওয়েবসাইট থেকে 'রিমোট জব' বইটি ক্রয়
              করবেন।
            </p>
            <p className="bookInfo-p">
              আপনি যখনই এই ওয়েবসাইট থেকে 'রিমোট জব' বইটি ক্রয় করবেন, আমাদের
              সফটওয়্যার আটোম্যাটিক্যালি আপনার জন্য একটি Referral Code তৈরি করে
              দেবে। আপনি এই Referral Code যাকে দেবেন, তিনি এই সাইট থেকে বই বা
              যেকোন কোর্স ক্রয় করলে ডিসকাউন্ট পাবেন। আপনিও একটি ভালো অঙ্কের
              Referral BONUS পাবেন
            </p>

            <h2 className="bookInfo-courseInstructor">Course Instructor </h2>
            <div className="bookInfo-teacherJack-flex-div">
              <img className="bookInfo-teacherJack" src={teacherJack} alt="" />
              <div>
                <h3 className="Zakir_Sir">Zakir Hossain</h3>
                <p className="trainer">Trainer, Teacherjackonline.com</p>
              </div>
            </div>
            {/*  */}
            <div className="WhatYouWillLearn-parent-div">
              <h3 className="WhatYouWillLearn-heading">
                Affiliate Marketing গাইডলাইনে যা পাবেন
              </h3>
              <div className="WhatYouWillLearn-grid-div">
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>
                    কিভাবে কোন স্মার্টফোন ছাড়া Affiliate Marketing করবেন
                    সেটির দিকনির্দেশনা
                  </p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>
                    কিভাবে কোন স্মার্টফোন ছাড়া Affiliate Marketing করবেন
                    সেটির দিকনির্দেশনা
                  </p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>সঠিক তথ্য দিয়ে সেল বাড়ানোর টেকনিক</p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>
                    Affiliate Marketing এর পাশাপাশি আপনার নিজেকে
                    ইম্প্রুভ করার টেকনিক
                  </p>
                </div>
              </div>
            </div>
            {/* Accroding from */}
            <div>
              <div className="accordionForm-second-parent-div">
                <p className="accordionForm-heading">
                  Affiliate Marketing গাইডলাইনের বিস্তারিত
                </p>
                <div className="accordionForm-grid-div">
                  <div className="accordionForm-children-div">
                    <p className="book-details">
                      আপনি আমাদের বই কিনে থাকলে আপনার ড্যাশবোর্ডে Affiliate
                      Marketing নামে যে ফাইল রয়েছে সেটি ডাইনলোড করুন। এই ফাইলে
                      ধাপে ধাপে বর্ণনা দেয়া আছে কিভাবে আপনি আমাদের Affiliate
                      Marketing প্রোগ্রামের মাধ্যমে ইনকাম করবেন। শুধুমাত্র একটি
                      স্মার্টফোন থাকলেই আপনি সহজে Affiliate Marketing করতে
                      পারবেন। ফোন ছাড়াও কিভাবে Affiliate Marketing করা যায় সেটিও
                      এই ফাইলে বিস্তারিত বলা হয়েছে।
                    </p>
                    <p className="book-details">
                      কারো কাছ থেকে টাকা নিয়ে হাজার হাজার টাকার ট্রেইনিং-এ ভর্তি
                      হতে হবে না। ইচ্ছে থাকলে উপায় হয়।
                    </p>
                    <p className="book-details">
                      আমাদের সাথে Affiliate Marketing করে ইনকাম করেই আপনি আমাদের
                      পরবর্তী স্টেপ-এ গিয়ে প্রয়োজনীয় কোর্স করবেন, কম্পিউটার
                      কিনবেন এবং যা যা আপনার প্রয়োজন সেগূলো কিনবেন।
                    </p>
                    <p className="book-details">
                      কারো কাছে দায়বদ্ধ থাকার বা জবাবদিহিতার মধ্যে
                      থাকার কোন দরকার নেই।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bookInfo-right-side-div">
            <div className="bookInfo-right-side-videoCart">
              <div className="bookInfo-courseDetails-div">
                <div className="bookInfo-img-div">
                  <img
                    className="bookInfo-img"
                    src={AffiliateMarketingImg}
                    alt=""
                  />
                </div>

                <Link to={`/bookDownloadPage/${id}`}>
                  <button className="Affiliate_CourseBtn">
                    <span className="Affiliate_Marketing_gideline">
                      Affiliate Marketing
                    </span>{" "}
                    গাইডলাইন ডাউনলোড করতে প্রথমে 'রিমোট জব' বইটি কিনুন
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgram;
