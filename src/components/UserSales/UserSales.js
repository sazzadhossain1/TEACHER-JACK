import React from "react";
import "./UserSales.css";
import { Link, useLoaderData } from "react-router-dom";

const UserSales = () => {
  const referCodeFromLocalStore = localStorage.getItem("storeReferCode");
  console.log(referCodeFromLocalStore);

  const userSalesGetApi = useLoaderData();
  console.log(userSalesGetApi);

  if (!userSalesGetApi.data) {
    return <div>Loading...</div>; // You can show a loading indicator or message while data is being fetched
  }
  return (
    <div className="useBuyingDetails_parent_div mt-10">
      <h2 className="reff_code">
        আপনার রেফারেল কোডটি হলো{" "}
        <span className="refer_code_number">{referCodeFromLocalStore}</span> ।
        এটি ব্যবহার করে আপনি এ্যাফিলিয়েট মার্কেটিং করতে পারেন
      </h2>
      <h1 className="my_buying">My Sales</h1>
      <table className="table-border table" cellPadding={30}>
        <thead>
          <tr className="t_head">
            <th>Product Name</th>
            <th>Payment From</th>
            <th>Pay Method</th>
            <th>Price</th>
            <th>discount</th>
            <th>Download</th>
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

              <td
                className={
                  data.status === "Approved" ? "green-status" : "red-status"
                }
              >
                {" "}
                {data.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSales;
