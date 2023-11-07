import React, { useEffect } from "react";
import "./UserBuying.css";
import { useLoaderData } from "react-router-dom";
import UseBuyingDetails from "../UseBuyingDetails/UseBuyingDetails";

const UserBuying = () => {
  const userBuyingGetApi = useLoaderData();
  console.log(userBuyingGetApi);
  if (!userBuyingGetApi.data) {
    return <div>Loading...</div>; // You can show a loading indicator or message while data is being fetched
  }
  return (
    <div className="useBuyingDetails_parent_div mt-10">
      <table className="table-border table" cellPadding={30}>
        <thead>
          <tr className="t_head">
            <th>Name</th>
            <th>Payee Number</th>
            <th>pay Method</th>
            <th>Price</th>
            <th>Download</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userBuyingGetApi.data.map((data) => (
            <tr className="table_colum" key={data.id}>
              <td>{data.name}</td>
              <td>{data.payee_number}</td>
              <td>{data.pay_method}</td>
              <td>{data.price}</td>
              <td>{data.download}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserBuying;
