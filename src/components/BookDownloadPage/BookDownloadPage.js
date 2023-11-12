import React, { useContext, useEffect } from "react";
import "./BookDownloadPage.css";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/UseContext";

const BookDownloadPage = () => {
  const { setUser } = useContext(AuthContext);
  const getBookInfoApi = useLoaderData();
  // console.log(getBookInfoApi);

  const { id } = getBookInfoApi;
  const refer_code = localStorage.getItem("refer_code");
  // console.log(refer_code);

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

    console.log(coupon_code);
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

        submitBtn.setAttribute("hidden", "hidden");
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

  let coupon = 34330;

  useEffect(() => {
    fetch(`https://app.teacherjackonline.com/api/check_coupon/${coupon}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const handleCheckCoupon = (e) => {
    e.preventDefault();
    // console.log(e);
    // try {
    //   let url = `https://app.teacherjackonline.com/api/check_coupon/${coupon_code}`;
    //   let result = await fetch(url, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify(),
    //   });

    //   result = await result.json();
    //   console.log(result);
    // } catch {
    //   console.log(error);
    // }

    // console.log(result);
  };

  const showInputField = (e) => {
    e.preventDefault();
    const Show_hidden = document.getElementById("Show_hidden");
    console.log(Show_hidden.removeAttribute("hidden"));
  };

  // -------------------------

  return (
    <div className="submit-up-parent-div">
      <div className="submit-child-div">
        <div className="submit-form">
          <div className="product_parent_div">
            <div className="product_img">
              <img
                className="img-bb"
                src={`http://app.teacherjackonline.com/${getBookInfoApi.image}`}
                alt=""
              />
            </div>
            <div className="product_info">
              <h1 className="product_title">{getBookInfoApi.name}</h1>
              <p className="product_price">
                Price: <span id="book_price">{getBookInfoApi.price}</span> taka
              </p>
              <p className="product_discount">
                কুপন কোড ব্যবহারে পাচ্ছেন{" "}
                <span id="Book_discount">{getBookInfoApi.discount}%</span>
                ডিসকাউন্ট
              </p>
              <p>
                <del>
                  <span className="item_price">{getBookInfoApi.price}</span>
                </del>{" "}
                &nbsp;
                <span className="item_discount_price">
                  {getBookInfoApi.price -
                    (getBookInfoApi.price * getBookInfoApi.discount) / 100}
                </span>
                টাকায়
              </p>
            </div>
          </div>

          <div className="bookDownloadPage-book-grid-die"></div>
          <div className="product-id-div"></div>
          <form>
            <div className="form-control">
              <label className="label">
                {/* <span className="CouponCode">কুপন কোড থাকলে এখানে লিখুন</span> */}
                <p className="use_coupon_code"> কুপন কোড ব্যবহার করুন</p>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered"
                  type="number"
                  placeholder=""
                  onChange={(e) => setCoupon_code(e.target.value)}
                  id="CouponCode"
                  name="CouponCode"
                  value={coupon_code}
                />
                <span onClick={handleCheckCoupon}>Check</span>
              </label>
            </div>

            <p>আপনার কুপন কোড সঠিক নয় </p>
            <p>অনুগ্রহও </p>

            {/*  */}
            <div className="form-group">
              <label htmlFor="PaymentMethod">কোন মাধ্যমে পেমেন্ট করছেন</label>
              <div className="for_center">
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
                  <option className="e_bank" value="bKash">
                    বিকাশ : 01961449755
                  </option>
                  <option className="e_bank" value="Nagad">
                    নগদ : 01961449755
                  </option>
                  <option className="e_bank" value="Rocket">
                    রকেট : 016388853581
                  </option>
                  <option className="e_bank" value="bangk">
                    Bank Acct: Zakir Hossain. BRAC BANK LIMITED. Account Num:
                    1501102568019001. Gulshan Branch.
                  </option>
                </select>
                <button onClick={showInputField} className="payment-btn">
                  আমি পেমেন্ট পাঠিয়েছি
                </button>
              </div>
            </div>
            {/*  */}
            {/* Try new way start */}
            <br />

            {/* try new way end */}
            <div id="Show_hidden" hidden>
              <div className="form-group">
                <label htmlFor="password">
                  যে নাম্বার থেকে পেমেন্ট পাঠাচ্ছেন
                </label>
                <input
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
                onClick={handleFrom}
                id="submitBtn"
                className="sign-up-btn submit-btn"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDownloadPage;
