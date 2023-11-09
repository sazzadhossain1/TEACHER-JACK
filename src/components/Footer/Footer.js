import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import teacherJack from "../../accets/Images/teaher-jack/teacherJack.png";
import weAccept from "../../accets/Images/we_Accept/weAccept.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faInvision,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-grid-div">
        {/*  */}
        {/* <div>
          <h4 className="footer-header">Still Need Help</h4>
          <div className="footer-blank-div"></div>

          <p className="footer-first-second-common-cart-p">
            Still Need Help finding out which path to take?{" "}
            <Link>
              <button className="footer-click-here-btn">Click  here</button>
            </Link>
          </p>
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
        </div> */}
        <div>
          <img className="footer-teacher-jack-logo" src={teacherJack} alt="" />
          <p className="WhatsApp_number">
            WhatsApp: 01327808821 (Message Only)
          </p>
          <p className="email">teacherjackonline@gmail.com </p>
          <button className="teacherjack_main_site">
            <Link to="http://www.teacherjackonline.com" target="_blank">
              http://www.teacherjackonline.com
            </Link>
          </button>
        </div>

        {/*  */}

        <div className="important_link_div">
          <h4 className="footer-header">Important Links</h4>

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
        </div>
        {/*  */}
        <div className="footer-contact-parent-div">
          <div className="footer-contact-child-div">
            <h4 className="footer-Channels-heading">Channels</h4>
            <p className="facebook-p">
              FB Page:&nbsp;
              <Link
                className="media_LInk_facebook"
                to="https://www.facebook.com/TeacherJackOnline"
                target="_blank"
              >
                https://www.facebook.com/TeacherJackOnline
              </Link>
            </p>

            <p className="youtube-p">
              You Tube:&nbsp;
              <Link
                target="_blank"
                className="media_LInk_youtube "
                to="https://www.youtube.com/@TeacherJackOnline"
              >
                https://www.youtube.com/@TeacherJackOnline
              </Link>
            </p>

            <div>
              <h2 className="We_Accept">We Accept</h2>
              <img className="weAccept_photo" src={weAccept} alt="" />
            </div>

            <div className="facebook_icon_div">
              <FontAwesomeIcon icon={faFacebook} className="facebook_icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-navigation-parent-div">
        <div className="footer-navigation-parent-grid-div container">
          <p className="footer-copy-right">
            © TeacherJackOnline. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
