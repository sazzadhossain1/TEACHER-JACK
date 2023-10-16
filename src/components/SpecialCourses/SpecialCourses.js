import React from "react";
import "./SpecialCourses.css";
import learningPhotoOne from "../../accets/Images/learning-photo/learning-photo-one.jpg";
import learningPhotoTwo from "../../accets/Images/learning-photo/learning-photo-two.jpg";

const SpecialCourses = () => {
  return (
    <div>
      <h2 className="special-courses-h2">Special Courses</h2>
      <div className="specialCourses-grid-div">
        <div className="specialCourses-cart">
          <img
            className="specialCourses-learning-photo"
            src={learningPhotoOne}
            alt=""
          />
          <div className="specialCourses-cart-text-div">
            <h3 className="specialCourses-cart-heading">
              *Job Preparation Guideline Course: 900 tk
            </h3>
            <button className="specialCourses-read-more">Read More</button>
          </div>
        </div>
        <div className="specialCourses-cart">
          <img
            className="specialCourses-learning-photo"
            src={learningPhotoTwo}
            alt=""
          />
          <div className="specialCourses-cart-text-div">
            <h3 className="specialCourses-cart-heading">
              *Basic Computer Usage Online Downloadable Course:  900 tk
            </h3>
            <button className="specialCourses-read-more">Read More</button>
          </div>
        </div>
        <div className="specialCourses-cart">
          <img
            className="specialCourses-learning-photo"
            src={learningPhotoOne}
            alt=""
          />
          <div className="specialCourses-cart-text-div">
            <h3 className="specialCourses-cart-heading">
              * Online Business ideas & scopes - How to know the entire business
              process of each of this businesses  -  5000 tk
            </h3>
            <button className="specialCourses-read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCourses;
