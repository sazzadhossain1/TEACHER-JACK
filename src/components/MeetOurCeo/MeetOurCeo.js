import React from "react";
import "./MeetOurCeo.css";
import CEOPhoto from "../../accets/Images/CEO-photo/CEO-Photo.png";
import { Link } from "react-router-dom";

const MeetOurCeo = () => {
  return (
    <div className="ceo-main-parent-div">
      <div className="meetOurCeo-grid-div">
        {/* <div className="first-ceo-img-div">
          <img src={CEOPhoto} alt="" />
        </div> */}
        <div className="meetOurCeo-text-div">
          <h3 className="teacher-jack-ceo">TEACHER JACK</h3>
          <p className="ceo-expert-p">Trainer, IT Business Person</p>
          <div className="p_photo_grid_div">
            <div>
              <p className="ceo-text-p">
                Zakir Hossain is one of the most prominent Information
                Technology Businessperson, an Author and a Trainer. He is TESOL
                Certified, ELT Teacher. He also provides training on information
                technology related subjects to students in many different
                countries. Zakir Hossain (Jack) is experienced and has taught
                students from China, South Korea, Mexico, Bangladesh, Canada and
                the United States of America over the last 8 years. He is
                friendly, helpful, open minded and affordable. He goes the extra
                mile to ensure student understanding of the lessons. He travels
                a lot and interacts with people from different background. He is
                knowledgeable and knows exactly which student requires what
                level of training. He is easily reachable and is always ready to
                mentor his trainees.
              </p>
              <p className="ceo-text-p">
                Zakir Hossain completed his ‘O Level’ under The University of
                Cambridge. Zakir completed his B.Sc in Management Information
                System (MIS) and M.A in English Language Teaching (ELT) from the
                USA. His childhood was quite cheerful. He kept busy with social
                work from the early stages of his life. He excelled in his
                school studies and always came out in flying colors.
              </p>
            </div>
            <div className="first-ceo-img-div">
              <img src={CEOPhoto} alt="" />
            </div>
          </div>

          <p className="ceo-text-p">
            Zakir is working as the Chief Executive Officer of an international
            Information Technology company{" "}
            <Link target="_blank" className="link" to="https://abaacorp.com/">
              Abaacorp.com
            </Link>{" "}
            Limited. Zakir is also the Chief Executive Officer and Founder of a
            SAAS company <br />
            <Link
              className="link"
              target="_blank"
              to="https://tripshiptask.com/"
            >
              TripShipTask.com
            </Link>
            . He is also heading a training organization under the banner of
            &nbsp;
            <Link
              className="link"
              target="_blank"
              to="https://bd.teacherjackonline.com/"
            >
              teacherjackonline.com
            </Link>
            .
          </p>
          <p className="zakir_sir_email">
            Email: zakir.hossain@tripshiptask.com
          </p>
          <br />
          <p>
            <Link
              target="_blank"
              className="media_link"
              to="https://web.facebook.com/ZakirHossainShow/?_rdc=1&_rdr"
            >
              https://www.facebook.com/ZakirHossainShow/
            </Link>
            <br />
            <Link
              target="_blank"
              className="media_link"
              to="https://www.youtube.com/@zakirhossainshow"
            >
              https://www.youtube.com/@zakirhossainshow
            </Link>
            <br />
          </p>
          <br />
          <p>
            <Link
              target="_blank"
              className="media_link"
              to="https://web.facebook.com/TeacherJackOnline?_rdc=1&_rdr"
            >
              https://www.facebook.com/TeacherJackOnline
            </Link>
            <br />
            <Link
              target="_blank"
              className="media_link"
              to="https://www.youtube.com/@TeacherJackOnline"
            >
              https://www.youtube.com/@TeacherJackOnline
            </Link>
          </p>
          <br />
          <Link to="/">
            <button className="ceo-learn-more-btn">Back to Home</button>
          </Link>
        </div>
        <div className="second-ceo-img-div">
          <img src={CEOPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MeetOurCeo;
