import React from "react";
import "./MediaButton.css";
import { Link } from "react-router-dom";

const MediaButton = () => {
  return (
    <div className="media-parent-div">
      <div className="media-button-grid-div">
        <div className="media-button-color-div-one">
          <Link className="facebook-group">
            <button className="media-common-flex-div">
              <p className="common-media-text">Facebook Group</p>
              <i class="fa-brands fa-facebook"></i>
            </button>
          </Link>
        </div>
        <div className="media-button-color-div-two">
          <Link>
            <button className="media-common-flex-div">
              <p className="common-media-text">YouTube Channel</p>
              <i class="fa-brands fa-youtube"></i>
            </button>
          </Link>
        </div>
        <div className="media-button-color-div-three">
          <Link>
            <button className="media-common-flex-div">
              <p className="common-media-text">Facebook Page</p>
              <i class="fa-brands fa-facebook"></i>
            </button>
          </Link>
        </div>
        <div className="media-button-color-div-four">
          <Link>
            <button className="media-common-flex-div">
              <p className="common-media-text">Linkedin</p>
              <i class="fa-brands fa-linkedin"></i>
            </button>
          </Link>
        </div>
        <div className="media-button-color-div-five">
          <Link>
            <button className="media-common-flex-div">
              <p className="common-media-text">Instagram</p>
              <i class="fa-brands fa-instagram"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediaButton;
