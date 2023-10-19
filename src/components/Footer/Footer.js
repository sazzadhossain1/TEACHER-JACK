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
          <h4 className="footer-header">RESOURCES</h4>
          <div className="footer-blank-div"></div>
          <p className="footer-first-second-common-cart-p">
            NEW! Tech Jobs Database
          </p>
          <p className="footer-first-second-common-cart-p">
            The Get Hired Track
          </p>
          <p className="footer-first-second-common-cart-p">
            Career Coaching for Skillcrush Students: Here’s How It Works
          </p>
          <p className="footer-first-second-common-cart-p">
            100+ Ways to Learn to Code for Free
          </p>
          <p className="footer-first-second-common-cart-p">
            11 High-Paying Entry-Level Tech Jobs—No Experience Required
          </p>
          <p className="footer-first-second-common-cart-p">
            How to Decide Between Being a Web Designer vs. Web Developer`r`
          </p>
          <p className="footer-first-second-common-cart-p">
            The 15 Essential Front End Developer Skills
          </p>
          <p className="footer-first-second-common-cart-p">
            9 Skills Every Successful Web Designer Needs
          </p>
        </div>
        {/*  */}
        <div>
          <h4 className="footer-header">ABOUT SKILLCRUSH</h4>
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
          <p className="footer-first-second-common-cart-p"> Blog </p>
          <p className="footer-first-second-common-cart-p">
            Anti-Racism Statement
          </p>
          <p className="footer-first-second-common-cart-p">
            Community Guidelines
          </p>
          <p className="footer-first-second-common-cart-p">Jobs</p>
          <p className="footer-first-second-common-cart-p">Sign In</p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing:</p>
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
