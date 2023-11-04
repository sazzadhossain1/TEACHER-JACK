import React from "react";
import "./UseBuyingDetails.css";
import { Link, useLoaderData } from "react-router-dom";

const UseBuyingDetails = () => {
  const userBuyingGetApi = useLoaderData();
  console.log(userBuyingGetApi);
  // console.log(data);
  // const {
  //   name,
  //   download,
  //   pay_method,
  //   payee_number,
  //   price,

  //   seller_id,
  //   status,
  //   trx_id,
  //   url,
  // } = data;

  return (
    <div>
      <h1>This is User Buying Details</h1>
      {/* <p>Name: {name}</p>
      <Link to={download}>Download</Link>
      <p>Payee Number: {payee_number}</p>
      <p>Payee Method: {pay_method}</p>
      <p>Price: {price}</p> */}
    </div>
  );
};

export default UseBuyingDetails;
