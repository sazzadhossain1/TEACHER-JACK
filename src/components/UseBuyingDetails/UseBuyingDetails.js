import React from "react";
import "./UseBuyingDetails.css";
import { Link, useLoaderData } from "react-router-dom";

const UseBuyingDetails = ({ data }) => {
  const userBuyingGetApi = useLoaderData();

  const {
    name,
    download,
    pay_method,
    payee_number,
    price,

    seller_id,
    status,
    trx_id,
    url,
  } = data;

  return <div></div>;
};

export default UseBuyingDetails;
