import React from "react";
import "./JobOpportunities.css";
import { Link } from "react-router-dom";
import CEOPhoto from "../../accets/Images/CEO-photo/CEO-Photo.png";
import jobOpportunities from "../../accets/Images/jobOpportunities/jobOpportunities.jpg";

const JobOpportunities = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  return (
    <div className="ceo-main-parent-div">
      <div className="meetOurCeo-grid-div">
        <div className="meetOurCeo-text-div">
          <div className="p_photo_grid_div">
            <div>
              <h3 className="teacher-jack-ceo">
                Currently We have the following open positions:
              </h3>
              <p className="AffiliateMarketing-text-p">
                1. Remote: Transcription
              </p>
              <p className="AffiliateMarketing-text-p">
                2. Remote: Video Editing
              </p>
              <p className="AffiliateMarketing-text-p">
                3. Hybrid: Online/Offline Marketing and/or Affiliate Marketing
                (On-site: Uttara 18)
              </p>
              <p className="AffiliateMarketing-text-p">
                4. On-site: Ai Pilot (On-site: Uttara 18)
              </p>
              <p className="AffiliateMarketing-text-p">
                5. On-site: Call Center Representative (Inbound and/or Outbound)
                both in Bangla & Enlish Language (On-site: Uttara 18)
              </p>
              <p className="AffiliateMarketing-text-p">
                6. Remote: Data Entry/Data Digging
              </p>

              <p className="our_payment_structure">Our payment structure:</p>
              <p>Salary on Project-based or Time-based</p>
              <p>Commission on Project-based or Time-based</p>

              <p className="Salary_or_Payment">
                Salary or Payment will commensurate with your skillset,
                knowledge and experience.
              </p>
            </div>

            <div className="jobOpportunities-img-div">
              {/* <img src={CEOPhoto} alt="" /> */}
              <img
                className="jobOpportunities_photo"
                src={jobOpportunities}
                alt=""
              />
            </div>
          </div>

          <p className="email-text-p">
            Email to send your CV/resume to:{" "}
            <span className="techerJack_email">
              {" "}
              teacherjackonline@gmail.com
            </span>
          </p>
          <p className="ceo-text-p">
            Please write "Applying for ......(position name)" in the subject
            line. And make sure your CV/resume file contains your name when you
            attach the file.
          </p>

          <p className="Disclaimer">
            Disclaimer: Understand that we are guiding you and mentoring you. We
            are assessing your skills, experience and capacity and referring to
            the open opportunities or jobs with our reference. You are not
            necessarily working for teacherjackonline platform when you are
            applying. Thank you.
          </p>

          <Link to="/">
            <button className="ceo-learn-more-btn">Back to Home</button>
          </Link>
        </div>
        <div className="second_jobOpportunities-img-div">
          <img
            className="second_jobOpportunities_photo"
            src={jobOpportunities}
            alt=""
          />
          {/* <img src={CEOPhoto} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
