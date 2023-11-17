import React from "react";
import "./UserBuying.css";
import { Link, useLoaderData } from "react-router-dom";
import UseBuyingDetails from "../UseBuyingDetails/UseBuyingDetails";

const UserBuying = () => {
  const userBuyingGetApi = useLoaderData();
  console.log(userBuyingGetApi);
  if (!userBuyingGetApi.data) {
    return <div>Loading...</div>; // You can show a loading indicator or message while data is being fetched
  }
  return (
    <div className="useBuyingDetails_parent_div mt-10">
      <h1 className="my_buying">My Purchase</h1>
      <table className="table-border table" cellPadding={30}>
        <thead>
          <tr className="t_head">
            <th>Product Name</th>
            <th>Payment From</th>
            <th>Pay Method</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Download</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userBuyingGetApi.data.map((data) => (
            <tr className="table_colum" key={data.id}>
              <td>{data.product_name}</td>
              <td>{data.payee_number}</td>
              <td>{data.pay_method}</td>
              <td>{data.price}</td>
              <td>{data.discount}</td>

              <td>
                {data.url ? (
                  <Link target="_blank" className="btn" to={data.url}>
                    Download
                  </Link>
                ) : (
                  ""
                )}
              </td>

              <td
                className={
                  data.status === "Approved" ? "green-status" : "red-status"
                }
              >
                {data.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserBuying;
