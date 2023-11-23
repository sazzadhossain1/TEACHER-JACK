import React from "react";
import "./BasicEnglishCommunication.css";
import { Link } from "react-router-dom";
import AffiliateMarketingImg from "../../accets/Images/AffiliateMarketingImg/AffiliateMarketingImg.jpg";
import teacherJack from "../../accets/Images/teacher-jack/teacherJack.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import basicEnglish from "../../accets/Images/basicEnglish/basicEnglish.jpg";

const BasicEnglishCommunication = () => {
  const id = +localStorage.getItem("bookDataId");
  // console.log(typeof id, id);

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const handleSubmitBtn = () => {
    console.log("button clicked");
    const basicEnglish = document.getElementById("basicEnglish");
    basicEnglish.removeAttribute("hidden");
    console.log(basicEnglish);
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    const basicEnglish = document.getElementById("basicEnglish");
    basicEnglish.setAttribute("hidden", "hidden");
  };
  return (
    <div>
      <div>
        <div className="bookInfo-grid-div">
          <div className="bookInfo-left-side-div">
            <h1 className="bookInfo-heading">Basic English Communication</h1>
            <p className="bookInfo-p">
              আপনি কাজ শিখেছেন, দক্ষতা অর্জন করেছেন এবং যে বিষয়ে দক্ষ তা আপনি
              ভালোই পারেন – এটাই স্বাভাবিক। কিন্তু তা সত্ত্বেও কাজ পাচ্ছেন না।
              আপনাকে অবশ্যই English Communication - এ ভালো হতে হবে। এখন এই ভালো
              জানা মানেটা কি? যদি মনে করেন ইংরেজি মানে শুধু ট্র্যান্সলেশন, তাহলে
              ভুল। শুধুমাত্র আক্ষরিক অনুবাদ করে ইংরেজি বলা যায় কিন্তু লিমিটেশন
              থেকে যায়।
            </p>
            <p className="bookInfo-p">
              চিন্তা করেন আপনি যদি এ্যামেরিকান, ব্রিটিশ, ক্যানাডিয়ান বা
              অস্ট্রেলিয়ানদের চিন্তাধারা বুঝতে পারেন, টোন বুঝতে পারেন, তাহলে
              আপনি সাকসেসফুল। আপনার পক্ষে কাজ পাওয়া অনেক সহজ হবে। আজ পর্যন্ত
              যতগুলো লেসন দেখলাম ট্রেইনারদের - সবাই Traditional, Bookish way তে
              শেখায়, ডাইরেক্ট ট্র্যান্সলেশন। ডিপ লেভেলে কোন ডিসকাশনই করে না। No
              wonder টেকনিক্যাল কাজে অনেকে অনেক ভালো হওয়া সত্ত্বেও Communication
              skill ভালো না থাকায় অনেকে কাজের অভাবে আছে
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
                <span className="Basic_English">
                  “Basic English Communication”
                </span>
                কোর্সটিতে আপনি যা পাবেন
              </h3>
              <div className="WhatYouWillLearn-grid-div">
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>এ্যামেরিকান স্টাইলে English Communication - এ দক্ষতা</p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>English -এর ডিপ লেভেলের মিনিং</p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>শুধু ভাষা নয়, English সভ্যতার লেসন</p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>
                    Communication - এর পাশাপাশি এ্যামেরিকানদের মতো Successful
                    Life Leading - এর অভ্যাস
                  </p>
                </div>
              </div>
            </div>
            {/* Accroding from */}
            <div>
              <div className="accordionForm-second-parent-div">
                <div className="accordionForm-grid-div">
                  <div className="accordionForm-children-div">
                    <p className="accordionForm-heading">
                      <span className="Basic_English">
                        “Basic English Communication”
                      </span>{" "}
                      কোর্সের বিস্তারিত
                    </p>
                    <p className="book-details">
                      Communication skill ভালো না থাকায় অনেকে কাজের অভাবে আছে
                      প্রতিদিন কমবেশি ২ – ৩ ঘন্টা সময় দিন। প্রতিটি সেকশনে নিজেকে
                      Test করুন এবং অতপর পুরোপুরি বোঝা হলে পরের সেকশনে যান।
                      “Basic English Communication” কোর্সটি আপনি ধাপে ধাপে অল্প
                      অল্প করে কিংবা সব সেকশন একবারে সংগ্রহ করতে পারবেন। এই
                      কোর্সটিতে ৩০+ টি মডিউল (সেকশন) রয়েছে
                    </p>
                    <p className="book-details">
                      এই কোর্সটি আপনি একবারে কিনতে পারেন ডিস্কাউন্ট নিয়ে (4000
                      টাকায়) কিংবা প্রতিটি মডিউল আলাদা আলাদা করে কিনতে পারেন মোট
                      30টি মডিউল, প্রতি মডিউল  ১৫০ টাকা করে
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
                  <img className="bookInfo-img" src={basicEnglish} alt="" />
                </div>
                <div className="bookInfo-text-div">
                  {/* <h1 className="bookInfo-name">{name}</h1> */}
                  {/* <h1 className="bookInfo-name">{bookData.name}</h1> */}
                  <h1 className="bookInfo-name">
                    “Basic English Communication Course”
                  </h1>
                  <p className="by-zakir-hossain">by Zakir Hossain</p>
                  {/* <p className="bookInfo-price">{price} TK</p> */}

                  <p className="bookInfo-price">
                    কুপন কোড ব্যবহার করলে{" "}
                    {/* <span className="coupon_price">{discountBookPrice} </span>tk */}
                    <span className="coupon_price">4000 </span>tk
                  </p>
                  <p className="coupon_code">
                    রেগুলার প্রাইস{" "}
                    <span className="ten_percent">
                      {/* {Number(bookData.price).toFixed(0)} */}
                      4500
                    </span>{" "}
                    tk
                  </p>
                  <p className="course_duration">Course Duration: 6 months</p>
                </div>

                <div
                  id="basicEnglish"
                  className="basicEnglishCommunication-success-div"
                  hidden
                >
                  <p className="basicEnglishCommunication-success-p">
                    This page is under construction. Please check
                    back periodically.
                    <br />
                    <br />
                    <Link className="btn" onClick={handleGoBack}>
                      Go Back
                    </Link>
                  </p>
                </div>
                <Link onClick={handleSubmitBtn} to="">
                  <button className="buyCourseBtn">
                    <span className="Affiliate_Marketing_gideline">
                      Buy The Course
                    </span>
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

export default BasicEnglishCommunication;
