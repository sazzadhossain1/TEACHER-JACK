import React from "react";
import "./BuyTheBook.css";
import { Link } from "react-router-dom";

const BuyTheBook = () => {
  return (
    <div className="buyTheBook-parent-div">
      <div className="buyTheBook-flex-div">
        <div>
          <p className="step-one">Step 1</p>
        </div>
        <div>
          <Link to="">
            <button className=" download-the-book">
              'রিমোট জব' বই ডাউনলোড
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyTheBook;
