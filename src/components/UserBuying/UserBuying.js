import React, { useEffect } from "react";
import "./UserBuying.css";
import { useLoaderData } from "react-router-dom";
import UseBuyingDetails from "../UseBuyingDetails/UseBuyingDetails";

const UserBuying = () => {
  const userBuyingGetApi = useLoaderData();
  // console.log(userBuyingGetApi);

  return (
    <div>
      <h1>This is user Buying </h1>
      <UseBuyingDetails></UseBuyingDetails>

      {/* {userBuyingGetApi.data.map((data) => (
        <UseBuyingDetails key={data.id} data={data}></UseBuyingDetails>
      ))} */}
    </div>
  );
};

export default UserBuying;
