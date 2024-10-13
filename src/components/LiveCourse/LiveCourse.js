import React from "react";
import "./LiveCourse.css";

const LiveCourse = () => {
  return (
    <div className="live_course_parent_div">
      <h1>English Training from Basic in American Style (Online Class). </h1>
      <h2>
        This Offer is only for TripShipTask.com users. You can Sign Up with
        TripShipTask using Referral Code 64303.
      </h2>

      <p className="This_special_offer">
        This special offer is only for TripShipTask users. 3 days a week, 12
        classes a month. Each Class is 30 mins. Course Fee: 300 tk / month Class
        will be on Google Meet.
      </p>

      <div className="liveCourse_parent_div">
        <div className="liveCourse_flex_div">
          <div>
            <p>Sun, Mon, Tue :</p>
          </div>
          <div>
            <p>11 am - 11:30 am</p>
            <p>2 pm - 2:30 pm</p>
            <p>8:30 pm - 9 pm</p>
            <p>9:30 pm - 10 pm</p>
          </div>
        </div>
      </div>

      <div className="liveCourse_parent_div">
        <div className="liveCourse_flex_div">
          <div>
            <p>Wed, Thu, Fri :</p>
          </div>
          <div>
            <p>11 am - 11:30 am</p>
            <p>2 pm - 2:30 pm</p>
            <p>8:30 pm - 9 pm</p>
            <p>9:30 pm - 10 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourse;
