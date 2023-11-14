import React from "react";
import "./BookDetailsPage.css";

import { useLoaderData } from "react-router-dom";
import BookInfo from "../BookInfo/BookInfo";

const BookDetailsPage = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const getBookApi = useLoaderData();
  // console.log(getBookApi);

  return (
    <div>
      {getBookApi.data.map((bookData) => (
        <BookInfo key={bookData.id} bookData={bookData}></BookInfo>
      ))}
    </div>
  );
};

export default BookDetailsPage;
