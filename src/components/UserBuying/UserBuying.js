import React from "react";
import "./UserBuying.css";
import { useLoaderData } from "react-router-dom";

const UserBuying = () => {
  const userBuyingGetApi = useLoaderData();
  console.log(userBuyingGetApi);
  return (
    <div>
      <h1>This is user Buying</h1>
    </div>
  );
};

export default UserBuying;
