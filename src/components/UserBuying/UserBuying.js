import React from "react";
import "./UserBuying.css";
import { useLoaderData } from "react-router-dom";
import UseBuyingDetails from "../UseBuyingDetails/UseBuyingDetails";

const UserBuying = () => {
  const userBuyingGetApi = useLoaderData();
  // console.log(userBuyingGetApi);

  return (
    <div>
      {userBuyingGetApi.data.map((data) => (
        <UseBuyingDetails key={data.id} data={data}></UseBuyingDetails>
      ))}
    </div>
  );
};

export default UserBuying;
