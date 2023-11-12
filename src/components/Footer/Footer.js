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
        <div className="footer_first_div">
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
