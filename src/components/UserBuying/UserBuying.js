import React, { useState } from "react";
import "./UserBuying.css";
import { Link, useLoaderData } from "react-router-dom";
import UseBuyingDetails from "../UseBuyingDetails/UseBuyingDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCircleArrowDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const UserBuying = () => {
  const [feedback, setFeedback] = useState("");
  const [visibleDetails, setVisibleDetails] = useState({});

  const userBuyingGetApi = useLoaderData();

  console.log(userBuyingGetApi);
  if (!userBuyingGetApi.data) {
    return <div>Loading...</div>; // You can show a loading indicator or message while data is being fetched
  }

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the feedback submission (you can send it to a server or perform other actions)
    console.log("Feedback submitted:", feedback);
    // Reset the feedback field
    setFeedback("");
  };

  // const showData = (data) => {
  //   console.log(data);
  //   const arrowData = document.getElementById("arrow_data");
  //   arrowData.data.setAttribute("hidden", "hidden");
  // };

  const toggleDetails = (id) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle visibility for the specific id
    }));
  };
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
          {/* <div>
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
          </div> */}

          {/* ============================== */}
          {/* =========== New API ========== */}
          {/* ============================== */}

          {userBuyingGetApi.data.data.map((data) => (
            <React.Fragment key={data.id}>
              <tr className="table_colum">
                <td>{data.name}</td>
                <td>{data.payee_number}</td>
                <td>{data.pay_method}</td>
                <td>{data.price}</td>
                <td>{data.discount}</td>

                <td>
                  {data.resource ? (
                    <Link target="_blank" className="btn" to={data.url}>
                      Download
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleDetails(data.id)}
                      className="btn"
                    >
                      <FontAwesomeIcon icon={faAngleDown} />
                    </button>
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

              {visibleDetails[data.id] && (
                <tr key={`arrow_data_${data.id}`} className="arrow_data">
                  <td colSpan={7}>
                    <table>
                      <tbody>
                        {data.module !== null ? (
                          <React.Fragment>
                            <tr>
                              <td colSpan={7}>{data.module.name}</td>
                            </tr>

                            {data.module.resource.map((rsData) => (
                              <React.Fragment key={rsData.id}>
                                <tr>
                                  <td>{rsData.name}</td>
                                  <td>
                                    <button className="btn second_btn">
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              </React.Fragment>
                            ))}
                          </React.Fragment>
                        ) : (
                          <tr style={{ width: "100%" }}>
                            <td>{data?.package?.name}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserBuying;
