import React from "react";
import "./UserSalesDetails.css";

const UserSalesDetails = ({ data }) => {
  console.log(data);
  const {
    name,
    created_at,
    discount,
    download,
    pay_method,
    payee_number,
    price,
    ref_discount,
    seller_id,
    status,
    trx_id,
    updated_at,
    url,
    user_id,
  } = data;

  return (
    <div>
      <h1>This is user Sales details</h1>
      <p>Name: {name}</p>
      <p>Discount:{discount}</p>
      <p>Download: {download}</p>
      <p>Pay Method: {pay_method}</p>
      <p>Pay Number: {payee_number}</p>
      <p>Price: {price}</p>
      <p>Ref Discount:{ref_discount}</p>
      <p>Status: {status}</p>
      <p>trx_id: {trx_id}</p>
    </div>
  );
};
export default UserSalesDetails;
