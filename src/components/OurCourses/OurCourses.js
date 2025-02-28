import React, { useEffect, useState } from "react";
import "./OurCourses.css";
import { Link } from "react-router-dom";
import cartPhoto from "../../accets/Images/our-corses-photo/cart-photo.jpg";

const OurCourses = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://app.teacherjackonline.com/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="our-courses-parent-div">
      <div className="our-courses-child-div">
        {/* <h1 className="our-courses-first-heading">Step 3</h1> */}
        <p className="core_skills">“Core Skills” Section</p>
        <p className="pick_at_least">
          Pick at least 1 course from this section
        </p>

        <div className="our-course-cart-grid-div">
          {products?.data?.map((data) => (
            <div className="our-course-cart-div">
              <img className="our-course-img" src={cartPhoto} alt="" />
              <h4 className="our-course-header">{data.name}</h4>
              <p className="discount_price">
                Discount w/ coupon: {data.price} Tk
              </p>
              <p className="">Discount: {data.discount} Tk</p>
              <Link to={`/productDetailsPage/${data.id}`}>
                <button className="our-course-see-more-btn">Buy Now</button>
              </Link>
            </div>
          ))}

          {/* <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Writing & Translation / Content development Course Fee: 1250 Tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 1000 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>

          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Data Entry/Data Digging / Research work. Course Fee: 850 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 1000 Tk</p>
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
              Transcription. Course Fee: 1100 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 900 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Audio Voice-over. Course Fee: 1100 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 900 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Video Editing. Course Fee: 3000 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 2500 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Telemarketing + CRM. Course Fee: 1500 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 1250 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Graphic Design. Course Fee: 2000 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 1550 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Web Design & Development. Course Fee:4000 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 500 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Search Engine Optimization (SEO). Project Management. Digital
              Marketing Course Fee: 2500 tk
            </h4>
            <p className="discount_price">Discount w/ coupon:2050 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Customer Support. Course Fee: 1500 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 1250 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Grooming - published in a book format 200 tk
            </h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Youtube/Facebook Content Making. Course Fee: 1250 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 1000 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Thumbnail design. Course Fee: 1250 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 1000 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Teaching English Online on Internatoinal Platforms. Course Fee:
              3000 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 2500 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>
          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">
              Authentication & Verification. Course Fee: 800 tk. Pre-requisite:
              Basic English course
            </h4>
            <p className="discount_price">Discount w/ coupon: 600 Tk</p>
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
              *Job Preparation Guideline Course: 800 tk
            </h4>
            <p className="discount_price">Discount w/ coupon: 600 Tk</p>
            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div>

          <div className="our-course-cart-div">
            <img className="our-course-img" src={cartPhoto} alt="" />
            <h4 className="our-course-header">Business Development</h4>

            <Link>
              <button className="our-course-see-more-btn">Buy Now</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
