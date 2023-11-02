import React from "react";
import "./BookDetailsPage.css";

import { useLoaderData } from "react-router-dom";
import BookInfo from "../BookInfo/BookInfo";

const BookDetailsPage = () => {
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
