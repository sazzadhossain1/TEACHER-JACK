import React from "react";
import "./UserSales.css";
import { Link, useLoaderData } from "react-router-dom";
import UserSalesDetails from "../UserSalesDetails/UserSalesDetails";

const UserSales = () => {
  const userSalesGetApi = useLoaderData();
  console.log(userSalesGetApi);

  if (!userSalesGetApi.data) {
    return <div>Loading...</div>; // You can show a loading indicator or message while data is being fetched
  }
  return (
    <div className="useBuyingDetails_parent_div mt-10">
      <h1 className="my_buying">My Sales</h1>
      <table className="table-border table" cellPadding={30}>
        <thead>
          <tr className="t_head">
            <th>Product Name</th>
            <th>Payee Number</th>
            <th>Pay Method</th>
            <th>Price</th>
            <th>discount</th>
            <th>Download Avle</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {userSalesGetApi.data.map((data) => (
            <tr className="table_colum" key={data.id}>
              <td>{data.id}</td>
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

              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSales;
// created_at,
//     discount,
//     download,
//     pay_method,
//     payee_number,
//     price,
//     ref_discount,
//     seller_id,
//     status,
//     trx_id,
//     updated_at,
//     url,
//     user_id,
