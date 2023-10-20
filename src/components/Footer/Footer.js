import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerPersonPhoto from "../../accets/Images/footer-img/footerPersonImg.jpg";
import teacherJack from "../../accets/Images/teaher-jack/teacherJack.png";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-grid-div">
        <div>
          <h4 className="footer-header">Important Links</h4>
          <div className="footer-blank-div"></div>
          <p className="footer-first-second-common-cart-p">
            We’re on a mission to support our students—especially those
            marginalized by gender, race, and/or age—to learn in-demand tech
            skills and land higher paying and more fulfilling jobs.
          </p>
          <a href="/meetOurCeo" alt="">
            <p className="footer-first-second-common-cart-p">
              About Teacher Jack
            </p>
          </a>
          <p className="footer-first-second-common-cart-p">
            {" "}
            Affiliate Program
          </p>
          <p className="footer-first-second-common-cart-p">Job Opportunities</p>
          <p className="footer-first-second-common-cart-p">FAQ</p>

          <Link to="/signUp">
            <p className="footer-first-second-common-cart-p">Sign In</p>
          </Link>
        </div>
        {/*  */}
        <div>
          <h4 className="footer-header">Find Path</h4>
          <div className="footer-blank-div"></div>

          <p className="footer-first-second-common-cart-p">
            It will lead to a form which will include - Name, ph, email, last
            education completed, Schooling where, Type of profession at
            present or recent past
          </p>
          <p className="footer-first-second-common-cart-p">
            যদি বুঝতে না পারেন যে আপনার কোন পথে এগুনো উচিৎ বা আপনি কনফিউসড
            থাকেন, তাহলে আপনার শিক্ষাগত যোগ্যতা কি, বয়স কত, লেখাপড়া করে থাকলে
            কোথায় করেছেন, স্মার্টফোন ব্যবহার করেন কিনা, কম্পিউটার ব্যবহার করেন
            কিনা, পূর্বে কোন ধরণের ট্রেইনিং নিয়েছেন কি না ইত্যাদি ডিটেইলস দিয়ে
            আমার ওয়েবসাইটে ফর্ম পুরণ করে সাবমিট করুন। আমি আপনার অবস্থা বুঝে
            সাজেশন দেবো কোন পথে এগোলে আপনার জন্য ভালো হবে।
          </p>
          <p className="footer-first-second-common-cart-p">
            যদি বুঝতে না পারেন যে আপনার কোন পথে এগুনো উচিৎ বা আপনি কনফিউসড
            থাকেন, তাহলে এই ফর্ম পুরণ করুন -
          </p>
        </div>
        {/*  */}
        <div>
          <div className="footer-last-cart-heading-flex-div">
            <img
              className="footer-person-photo"
              src={footerPersonPhoto}
              alt=""
            />
            <div>
              <h4 className="footer-header">Have Question?</h4>
              <p>
                {" "}
                Still Need Help finding out which path to take?{" "}
                <Link>
                  <button className="footer-click-here-btn">Click  here</button>
                </Link>
              </p>
            </div>
          </div>

          <div className="footer-last-cart-icon-flex-div">
            <i className="fa-solid fa-align-left footer-icon"></i>
            <Link className="text-us">
              <p>Text us -000-000-000</p>
            </Link>
          </div>

          <div className="footer-last-cart-icon-flex-div-two">
            <i class="fa-solid fa-phone-volume footer-icon"></i>
            <Link className="text-us">
              <p>Schedule a Call</p>
            </Link>
          </div>
          <p className="or-check">
            Or check out the <span className="faq">FAQs,</span> or email us at{" "}
            <span className="email"> teacherjackonline@gmail.com</span>
          </p>
          <div className="footer-media-flex-div">
            <div>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div>
              <i class="fa-brands fa-invision"></i>
            </div>
            <div>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-navigation-parent-div">
        <div className="footer-navigation-parent-grid-div container">
          <img className="footer-teacher-jack-logo" src={teacherJack} alt="" />
          <div>
            <ul className="footer-ul">
              <li>Site Map</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <p className="footer-copy-right">
            © 2022 TeacherJackOnline. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
