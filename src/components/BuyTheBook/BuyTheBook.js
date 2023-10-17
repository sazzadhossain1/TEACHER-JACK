import React from "react";
import "./BuyTheBook.css";
import { Link } from "react-router-dom";

const BuyTheBook = () => {
  return (
    <div>
      <Link to="">
        <button className=" download-the-book">
          Download the Book<i class="fa-solid fa-angle-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default BuyTheBook;
