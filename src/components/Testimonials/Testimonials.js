import React from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";
import studentPhotoOne from "../../accets/Images/testimoniala-photo/studentphotoOne.jpg";
import studentPhotoTwo from "../../accets/Images/testimoniala-photo/studentphotoTwo.jpg";
import studentPhotoThree from "../../accets/Images/testimoniala-photo/studentphotoThree.jpeg";
import studentPhotoFour from "../../accets/Images/testimoniala-photo/studentphotofour.jpg";
import studentPhotoFive from "../../accets/Images/testimoniala-photo/studentphotofive.jpg";
import studentPhotoSix from "../../accets/Images/testimoniala-photo/studentphotoSix.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonial-parent-div">
      <h1 className="testimonial-first-heading">What Students Say About Me</h1>
      <div className="testimonials-grid-div">
        <div className="testimonial-cart-div">
          <img
            className="testimonial-student-photo"
            src={studentPhotoOne}
            alt=""
          />
          <h4 className="testimonial-student-name">Brook</h4>
          <p className="testimonial-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eveniet, quis omnis ipsum architecto soluta voluptate
            expedita rerum assumenda cupiditate totam enim illo et, sit commodi
            laborum molestias. A, adipisci.
          </p>

          <Link>
            <button className="testimonial-learn-more-btn">Learn More</button>
          </Link>
        </div>
        <div className="testimonial-cart-div">
          <img
            className="testimonial-student-photo"
            src={studentPhotoTwo}
            alt=""
          />
          <h4 className="testimonial-student-name">Brook</h4>
          <p className="testimonial-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eveniet, quis omnis ipsum architecto soluta voluptate
            expedita rerum assumenda cupiditate totam enim illo et, sit commodi
            laborum molestias. A, adipisci.
          </p>
          <Link>
            <button className="testimonial-learn-more-btn">Learn More</button>
          </Link>
        </div>
        <div className="testimonial-cart-div">
          <img
            className="testimonial-student-photo"
            src={studentPhotoThree}
            alt=""
          />
          <h4 className="testimonial-student-name">Brook</h4>
          <p className="testimonial-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eveniet, quis omnis ipsum architecto soluta voluptate
            expedita rerum assumenda cupiditate totam enim illo et, sit commodi
            laborum molestias. A, adipisci.
          </p>
          <Link>
            <button className="testimonial-learn-more-btn">Learn More</button>
          </Link>
        </div>
        <div className="testimonial-cart-div">
          <img
            className="testimonial-student-photo"
            src={studentPhotoFour}
            alt=""
          />
          <h4 className="testimonial-student-name">Brook</h4>
          <p className="testimonial-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eveniet, quis omnis ipsum architecto soluta voluptate
            expedita rerum assumenda cupiditate totam enim illo et, sit commodi
            laborum molestias. A, adipisci.
          </p>
          <Link>
            <button className="testimonial-learn-more-btn">Learn More</button>
          </Link>
        </div>
        <div className="testimonial-cart-div">
          <img
            className="testimonial-student-photo"
            src={studentPhotoFive}
            alt=""
          />
          <h4 className="testimonial-student-name">Brook</h4>
          <p className="testimonial-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eveniet, quis omnis ipsum architecto soluta voluptate
            expedita rerum assumenda cupiditate totam enim illo et, sit commodi
            laborum molestias. A, adipisci.
          </p>
          <Link>
            <button className="testimonial-learn-more-btn">Learn More</button>
          </Link>
        </div>
        <div className="testimonial-cart-div">
          <img
            className="testimonial-student-photo"
            src={studentPhotoSix}
            alt=""
          />
          <h4 className="testimonial-student-name">Brook</h4>
          <p className="testimonial-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus eveniet, quis omnis ipsum architecto soluta voluptate
            expedita rerum assumenda cupiditate totam enim illo et, sit commodi
            laborum molestias. A, adipisci.
          </p>
          <Link>
            <button className="testimonial-learn-more-btn">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
