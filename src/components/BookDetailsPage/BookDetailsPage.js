import React from "react";
import "./BookDetailsPage.css";

import { Link, useLoaderData } from "react-router-dom";
import BookInfo from "../BookInfo/BookInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import teacherJack from "../../accets/Images/teacher-jack/teacherJack.jpg";
import bookPhotoTwo from "../../accets/Images/hero-section-photo/BookCoverPageTwo.png";

const BookDetailsPage = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const getBookApi = useLoaderData();
  console.log(getBookApi);

  const id = getBookApi.id;

  const dis = getBookApi.discount;
  const regularPrice = getBookApi.price;

  const discountBookPrice = regularPrice - dis;
  console.log(discountBookPrice);

  return (
    <div>
      {/* {getBookApi.data.map((bookData) => (
        <BookInfo key={bookData.id} bookData={bookData}></BookInfo>
      ))} */}

      <div>
        <div>
          <div className="bookInfo-grid-div">
            <div className="bookInfo-left-side-div">
              <h1 className="bookInfo_first_heading">রিমোট জব বই</h1>
              <p className="bookInfo-p">
                এই বইটি এমনভাবে লেখা যাতে গ্রামে বসে থাকা একজন চাকুরীপ্রার্থী বা
                ছাত্র-ছাত্রী থেকে শুরু করে ঢাকার ইংলিশ মিডিয়ামের সুপার
                এফিশিয়েন্ট একজন student-ও যেনো ফ্রিল্যান্সিং বা রিমোট জব করে
                ইনকাম করতে পারে এবং একটি Future গড়ে তুলতে পারে।
              </p>
              <h2 className="bookInfo-courseInstructor">Author </h2>
              <div className="bookInfo-teacherJack-flex-div">
                <img
                  className="bookInfo-teacherJack"
                  src={teacherJack}
                  alt=""
                />
                <div>
                  <h3 className="Zakir_Sir">Zakir Hossain</h3>
                  <p className="trainer">Entrepreneur, Teacherjackonline.com</p>
                  <Link
                    target="_blank"
                    to="/aboutTeacherJack"
                    className="righter"
                  >
                    বইটির লেখক সম্পর্কে জানুন
                  </Link>
                </div>
              </div>

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

              <div>
                <div className="accordionForm-second-parent-div">
                  <p className="accordionForm-heading">বইয়ের বিস্তারিত</p>
                  <div className="accordionForm-grid-div">
                    <div className="accordionForm-children-div">
                      <p className="book-details">
                        আপনি চাচ্ছেন আপনার আয়-রোজগার বাড়াতে। তাহলে এই
                        প্রোগ্রামটি আপনার জন্য জরুরী। এই বইটি পড়লে আপনি
                        অর্থনৈতিক মুক্তি বা Financial Freedom পাবেন ইনশাল্লাহ।
                        দেশে হাজারও বই রয়েছে, লক্ষ লক্ষ Youtube ভিডিও রয়েছে
                        যেখানে নানা ধরণের আইডিয়া দেয়া হয়, Lesson দেয়া হয় – কিছু
                        রয়েছে সত্য আবার কিছু রয়েছে মিথ্যা মিশ্রিত। আপনি যেনো
                        সঠিক গাইডলাইনটি পান, সেজন্যই আমার এ উদ্যোগ। এছাড়াও পাবেন
                        কম বিনিয়োগে অনলাইনে কি কি হালাল ব্যবসা করা যায়
                        ইন্টারন্যাশনাল লেভেলে তার তথ্য।
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
                    <img className="bookInfo-img" src={bookPhotoTwo} alt="" />
                    <p className="isbn_number">ISBN: 978-984-98092-8-9</p>
                  </div>
                  <div className="bookInfo-text-div">
                    <h1 className="bookInfo-name">{getBookApi.name}</h1>
                    <p className="by-zakir-hossain">by Zakir Hossain</p>

                    <p className="bookInfo-price">
                      কুপন কোড ব্যবহার করলে{" "}
                      <span className="coupon_price">{discountBookPrice} </span>
                      tk
                    </p>
                    <p className="coupon_code">
                      রেগুলার প্রাইস{" "}
                      <span className="ten_percent">
                        {Number(getBookApi.price).toFixed(0)}
                      </span>{" "}
                      tk
                    </p>
                  </div>

                  <Link to={`/productPurchasePage/${id}`}>
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
    </div>
  );
};

export default BookDetailsPage;
