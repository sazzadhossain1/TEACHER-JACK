import React from "react";
import "./BookInfo.css";
import bookPhoto from "../../accets/Images/hero-section-photo/BookCoverPage.jpg";
import { Link } from "react-router-dom";

import teacherJack from "../../accets/Images/teacher-jack/teacherJack.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BookInfo = ({ bookData }) => {
  // console.log(bookData);
  const { id } = bookData;
  // console.log(typeof id, id);
  localStorage.setItem("bookDataId", id);

  const dis = bookData.discount;
  const regularPrice = bookData.price;

  const discountBookPrice = regularPrice - dis;
  // console.log(discountBookPrice);

  return (
    <div>
      <div>
        <div className="bookInfo-grid-div">
          <div className="bookInfo-left-side-div">
            <h1 className="bookInfo-heading">রিমোট জব বই</h1>
            <p className="bookInfo-p">
              এই বইটি এমনভাবে লেখা যাতে গ্রামে বসে থাকা একজন চাকুরীপ্রার্থী বা
              ছাত্র-ছাত্রী থেকে শুরু করে ঢাকার ইংলিশ মিডিয়ামের সুপার এফিশিয়েন্ট
              একজন student-ও যেনো ফ্রিল্যান্সিং বা রিমোট জব করে ইনকাম করতে পারে
              এবং একটি Future গড়ে তুলতে পারে।
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
              <h3 className="WhatYouWillLearn-heading">বইটিতে যা পাবেন</h3>
              <div className="WhatYouWillLearn-grid-div">
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>ফ্রিল্যান্সিং বা রিমোট জব বিষয়ে সঠিক তথ্য। </p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>
                    অনলাইনেই আন্তর্জাতিক মানের ট্রেইনিং যা যেকোন
                    স্থান থেকে করা সম্ভব
                  </p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>ট্রেইনিং শেষে হাতে- কলমে কাজের সুযোগ</p>
                </div>
                <div className="WhatYouWillLearn-icon-flex-div">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>অনলাইনে হালাল ব্যবসা বিষয়ক তথ্য</p>
                </div>
              </div>
            </div>
            {/* Accroding from */}
            <div>
              <div className="accordionForm-second-parent-div">
                <p className="accordionForm-heading">বইয়ের বিস্তারিত</p>
                <div className="accordionForm-grid-div">
                  <div className="accordionForm-children-div">
                    <p className="book-details">
                      আপনি চাচ্ছেন আপনার আয়-রোজগার বাড়াতে। তাহলে এই প্রোগ্রামটি
                      আপনার জন্য জরুরী। এই বইটি পড়লে আপনি অর্থনৈতিক মুক্তি বা
                      Financial Freedom পাবেন ইনশাল্লাহ। দেশে হাজারও বই রয়েছে,
                      লক্ষ লক্ষ Youtube ভিডিও রয়েছে যেখানে নানা ধরণের আইডিয়া
                      দেয়া হয়, Lesson দেয়া হয় – কিছু রয়েছে সত্য আবার কিছু রয়েছে
                      মিথ্যা মিশ্রিত। আপনি যেনো সঠিক গাইডলাইনটি পান, সেজন্যই
                      আমার এ উদ্যোগ। এছাড়াও পাবেন কম বিনিয়োগে অনলাইনে কি কি
                      হালাল ব্যবসা করা যায় ইন্টারন্যাশনাল লেভেলে তার তথ্য।
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
                  <img className="bookInfo-img" src={bookPhoto} alt="" />
                </div>
                <div className="bookInfo-text-div">
                  {/* <h1 className="bookInfo-name">{name}</h1> */}
                  <h1 className="bookInfo-name">{bookData.name}</h1>
                  <p className="by-zakir-hossain">by Zakir Hossain</p>
                  {/* <p className="bookInfo-price">{price} TK</p> */}

                  <p className="bookInfo-price">
                    কুপন কোড ব্যবহার করলে{" "}
                    <span className="coupon_price">{discountBookPrice} </span>tk
                  </p>
                  <p className="coupon_code">
                    রেগুলার প্রাইস{" "}
                    <span className="ten_percent">
                      {Number(bookData.price).toFixed(0)}
                    </span>{" "}
                    tk
                  </p>
                  <p className="print_copy">
                    {" "}
                    হার্ড কপির লিংক পরবর্তীতে এখানে দেয়া হবে
                  </p>
                </div>

                <Link to={`/bookDownloadPage/${id}`}>
                  <button className="buyCourseBtn">
                    বইটি কিনুন (soft copy)
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

export default BookInfo;
