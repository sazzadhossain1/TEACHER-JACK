import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-main-div">
      <div className="hero-child-div">
        <h1 className="hero-first-heading">
          Be Focused Be Skilled and Be Own Boss
        </h1>
        <div className="hero-grid-div">
          <div className="hero-text-div">
            <h3 className="hero-second-text-heading">
              Best IT institute in Bangladesh
            </h3>
            <h2 className="hero-teacher-jack">Teacher Jack</h2>
            <p className="hero-p-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eius
              amet ab natus atque soluta voluptates alias est, quaerat quisquam
              aliquam vel impedit id aspernatur ullam? Id, a! Quidem vel dolore
              nam explicabo nihil excepturi eum mollitia laboriosam repellat
              delectus quaerat laborum, at rem illo expedita quis? Obcaecati,
              quis deleniti!
            </p>
            <button className="learn-more-btn">Learn More</button>
            <button className="how-to-admit-btn">How to Admit</button>
            <button className="join-success-btn">Join Success Group</button>
          </div>
          <div>
            <iframe
              className="hero-video"
              src="https://www.youtube.com/embed/UlaAYWKwTjw?si=sawEpibvGiU62OEC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <marquee className="marquee" behavior="" direction="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nisi
          aperiam itaque eos asperiores velit sunt similique officia commodi
          provident quo, esse animi maxime magnam nihil delectus sit rerum
          deleniti!
        </marquee>
      </div>
    </div>
  );
};

export default HeroSection;
