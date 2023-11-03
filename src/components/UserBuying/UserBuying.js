import React, { useEffect, useState } from "react";
import "./UserBuying.css";
import { useLoaderData } from "react-router-dom";

const UserBuying = () => {
  const userBuyingGetApi = useLoaderData();
  console.log(userBuyingGetApi);

  return <div>{userBuyingGetApi.data.map((data) => console.log(data))}</div>;
};

export default UserBuying;
