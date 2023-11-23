import React from "react";
import "./RemoteJobBookDownload.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";

const RemoteJobBookDownload = () => {
  const getProductData = useLoaderData();
  const id = getProductData.data[0].id;

  return (
    <div className="buyTheBook-parent-div">
      {/* {getProductData.data.map((data) => console.log(data.id))} */}
      <div className="buyTheBook-flex-div">
        <Link to={`/bookDetailsPage`}>
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
