import React, { useEffect, useState } from "react";
import "./UserBuying.css";
import { useLoaderData } from "react-router-dom";

const UserBuying = () => {
  const userBuyingGetApi = useLoaderData();
  console.log(userBuyingGetApi);

  // const [data, setData] = useState(null);
  // const id = 1;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://app.teacherjackonline.com/api/user/buyings/${id}`
  //       );
  //       const result = await response.json();
  //       setData(result);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("error", error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <div>
      <h1>This is user Buying</h1>
    </div>
  );
};

export default UserBuying;
