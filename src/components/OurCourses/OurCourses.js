import React from "react";
import "./OurCourses.css";
import { Link } from "react-router-dom";
import cartPhoto from "../../accets/Images/our-corses-photo/cart-photo.jpg";

const OurCourses = () => {
  return (
    <div className="our-courses-parent-div">
      <div className="our-courses-child-div">
        <h1 className="our-courses-first-heading">Step 3</h1>
        <p className="core_skills">“Core Skills” Section</p>
        <p className="pick_at_least">
          Pick at least 1 course from this section
        </p>
        <div className="our-course-cart-grid-div">
          {/* <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Affiliate Marketing: Course Fee: 650 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div> */}
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Writing & Translation / Content development Course Fee: 850 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>

          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Data Entry/Data Digging / Research work. Course Fee: 850 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">Marketing. Course Fee: 850 tk</h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Transcription. Course Fee: 900 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Audio Voice-over. Course Fee: 850 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Video Editing. Course Fee: 3000 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Telemarketing + CRM. Course Fee: 1250 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Graphic Design. Course Fee: 2000 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Web Design & Development. Course Fee: 5000 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Search Engine Optimization (SEO). Course Fee: 2500 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Customer Support. Course Fee: 850 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Youtube/Facebook Content Making. Course Fee: 850 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Thumbnail design. Course Fee: 850 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Teaching English Online on Internatoinal Platforms. Course Fee:
              5000 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Authentication & Verification. Course Fee: 500 tk. Pre-requisite:
              Basic English course
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              HR Management. Course Fee: 1200 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Biz Development: Course Fee: 800 tk. Pre-requisite: Basic English
              course + Data Digging/ Data Entry / Research work course.
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Biz Development: Course Fee: 800 tk. Pre-requisite: Basic English
              course + Data Digging/ Data Entry / Research work course.
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              *Job Preparation Guideline Course: 900 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              *Basic Computer Usage Online Downloadable Course:  900 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Online Business ideas & scopes - How to know the entire business
              process of each of this businesses  -  5000 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
