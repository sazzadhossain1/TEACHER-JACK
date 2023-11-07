import React, { useContext, useEffect } from "react";
import "./BookDownloadPage.css";
import { useState } from "react";
// import bookPhoto from "../../accets/Images/hero-section-photo/BookCoverPage.jpg";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/UseContext";

const BookDownloadPage = () => {
  const { setUser } = useContext(AuthContext);
  const getBookInfoApi = useLoaderData();
  console.log(getBookInfoApi);

  const { id } = getBookInfoApi;

  const [disable, setDisable] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [product_id, setProduct_id] = useState(id);
  const [pay_method, setPay_method] = useState("");
  const [coupon_code, setCoupon_code] = useState("");
  const [payee_number, setPayee_number] = useState("");
  const [trx_id, setTrx_id] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // console.log(product_id);

  useEffect(() => {
    setProduct_id(id);
  }, [id]);

  async function handleFrom(e) {
    e.preventDefault();
    // console.log(id);
    // setProduct_id(id);
    // console.log(setProduct_id(id));
    let inputItem = {
      name,
      email,
      phone,

      product_id,
      price,
      pay_method,

      payee_number,
      trx_id,
      coupon_code,
    };

    try {
      let url = "https://app.teacherjackonline.com/api/sale";
      let result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(inputItem),
      });

      result = await result.json();
      console.log("result", result);
      if (result.data) {
        const submitBtn = document.getElementById("submitBtn");

        console.log(submitBtn.setAttribute("hidden", "hidden"));
      }

      setDisable(true);
      if (result) {
        setSuccess(true);
        setError("");
      } else {
        setError("Please Send Correct Price");
        setSuccess(false);
      }
      setUser(result);
      // console.log(result);
    } catch (error) {
      // console.log("error", error);
      setSuccess(false);
    }
    // console.log(inputItem);
  }

  return (
    <div className="submit-up-parent-div">
      <div className="submit-child-div">
        <div className="submit-form">
          <h2 className="submit-title">নিচের ফর্মটি পুরণ করুন</h2>
          <p>{getBookInfoApi.name}</p>
          <p>{getBookInfoApi.price}</p>
          {/* <p>{`http://app.teacherjackonline.com/${getBookInfoApi.image}`}</p> */}
          <img
            className="img-bb"
            src={`http://app.teacherjackonline.com/${getBookInfoApi.image}`}
            alt=""
          />
          <div className="bookDownloadPage-book-grid-die"></div>
          <div className="product-id-div"></div>
          <form onSubmit={handleFrom}>
            <p>Coupon Code ব্যবহার করলেই পাচ্ছেন 10% ডিসকাউন্ট</p>
            <br></br>

            <div className="form-group" id="coupon_field">
              <label htmlFor="CouponCode">কুপন কোড</label>
              <input
                type="number"
                onChange={(e) => setCoupon_code(e.target.value)}
                id="CouponCode"
                name="CouponCode"
                value={coupon_code}
              />
            </div>

            {/*  */}
            <div className="form-group">
              <label htmlFor="PaymentMethod">কোন মাধ্যমে পেমেন্ট করছেন</label>
              <select
                required
                className="select-option"
                name="pay_method"
                id="pay_method"
                type="text"
                value={pay_method}
                onChange={(e) => setPay_method(e.target.value)}
              >
                <option value="">Please Select Payment Method</option>
                <option value="bKash">বিকাশ = 01793596432</option>
                <option value="Nagad">নগদ = 01793596432</option>
                <option value="Rocket">রকেট = 01793596432</option>
              </select>
            </div>
            {/*  */}
            <div className="form-group">
              <label htmlFor="password">
                যে নাম্বার থেকে পেমেন্ট পাঠাচ্ছেন
              </label>
              <input
                type="number"
                onChange={(e) => setPayee_number(e.target.value)}
                id="payee_number"
                name="payee_number"
                value={payee_number}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">ট্র্যান্স্যাকশন আই ডি নাম্বার</label>
              <input
                type="text"
                onChange={(e) => setTrx_id(e.target.value)}
                id="trx_id"
                name="trx_id"
                value={trx_id}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">কত টাকা পেমেন্ট করেছেন</label>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                name="price"
                value={price}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> পুরো নাম</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                value={name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> আপনার ই-মেইল এ্যাড্রেস</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                value={email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">আপনার ফোন নাম্বার</label>
              <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                name="phone"
                value={phone}
                required
              />
            </div>
            <p className="bookDownloadPage-error-p" style={{ color: "red" }}>
              {error}
            </p>
            {success && (
              <p className="bookDownloadPage-success-p">
                Successfully Submit...Please Check Your Email <br />
                <Link to="/">Back to Home</Link>
              </p>
            )}
            <button
              id="submitBtn"
              className="sign-up-btn submit-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDownloadPage;
