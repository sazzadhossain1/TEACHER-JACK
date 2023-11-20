import React from "react";
import "./RemoteJobBookDownload.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RemoteJobBookDownload = () => {
  return (
    <div className="buyTheBook-parent-div">
      <div className="buyTheBook-flex-div">
        <Link to="/bookDetailsPage">
          <button className="download-the-book">
            <p className="download-the-book_p">
              BUY BOOK &nbsp;
              <FontAwesomeIcon icon={faShoppingCart} />
            </p>
            <span className="click_here_btn">(এখানে ক্লিক করুন) </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RemoteJobBookDownload;
