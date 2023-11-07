import React from "react";
import "./UserSales.css";
import { useLoaderData } from "react-router-dom";
import UserSalesDetails from "../UserSalesDetails/UserSalesDetails";

const UserSales = () => {
  const userSalesGetApi = useLoaderData();
  console.log(userSalesGetApi);

  if (!userSalesGetApi.data) {
    return <div>Loading...</div>; // You can show a loading indicator or message while data is being fetched
  }
  return (
    <div>
      <h1>User Sales</h1>
      {userSalesGetApi.data.map((data) => (
        <UserSalesDetails key={data.id} data={data}></UserSalesDetails>
      ))}
    </div>
  );
};

export default UserSales;
