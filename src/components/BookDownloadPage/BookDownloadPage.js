import React, { useContext, useEffect } from "react";
import "./BookDownloadPage.css";
import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UseContext";

const BookDownloadPage = () => {
  // For Safari
  // document.body.scrollTop = 0;

  // For Chrome, Firefox, IE and Opera
  // document.documentElement.scrollTop = 0;

  const { setUser } = useContext(AuthContext);
  const getBookInfoApi = useLoaderData();
  console.log(getBookInfoApi.discount);
  const navigate = useNavigate();

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

  useEffect(() => {
    setProduct_id(id);
  }, [id]);

  async function handleFrom(e) {
    e.preventDefault();

    const numberPrice = document.getElementById("numberPrice");
    const price_text = numberPrice.innerText;

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
      address: "",
    };
    console.log(inputItem);
    console.log(price);
    if (+price >= +price_text) {
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
        console.log(JSON.stringify(inputItem));
        console.log("result", result);

        if (result.data) {
          const submitBtn = document.getElementById("submitBtn");

          // submitBtn.setAttribute("hidden", "hidden");
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
      } catch (error) {
        setSuccess(false);
      }
    } else {
      alert("Please input your valid price");
    }
  }

  async function handleCheckCoupon(e) {
    const code_error = document.getElementById("code_error");
    const numberPrice = document.getElementById("numberPrice");

    e.preventDefault();
    try {
      let url = `https://app.teacherjackonline.com/api/check_coupon/${coupon_code}`;
      let result = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      console.log(result);

      if (result.data === null) {
        code_error.innerHTML = "<p class='error'>আপনার কুপন কোড সঠিক নয়</p>";

        numberPrice.innerText = ` ${Number(getBookInfoApi.price).toFixed()} `;
      } else {
        code_error.innerHTML = '<p class="success">আপনার কুপন কোড সঠিক</p>';

        numberPrice.innerText = `${
          getBookInfoApi.price - getBookInfoApi.discount
        } `;
      }
    } catch {
      console.log(error);
    }
  }

  const showInputField = (e) => {
    e.preventDefault();

    const checked_field = document.getElementById("checked_field");

    checked_field.setAttribute("checked", "checked");

    const Show_hidden = document.getElementById("Show_hidden");
    Show_hidden.removeAttribute("hidden");
  };

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
                Price:&nbsp;
                <span id="book_price">
                  {Number(getBookInfoApi.price).toFixed(0)}
                </span>{" "}
                Taka
              </p>
              <p className="product_discount">
                কুপন কোড ব্যবহারে পাচ্ছেন{" "}
                <span className="book_discount" id="book_discount">
                  {Number(getBookInfoApi.discount).toFixed(0)}
                </span>{" "}
                Taka &nbsp;
                {/* <span id="Book_discount">
                  {Number(getBookInfoApi.discount).toFixed(0)}%
                </span> */}
                ডিসকাউন্ট
              </p>
              <p className="strike_p">
                <strike>
                  <span className="item_price">
                    {Number(getBookInfoApi.price).toFixed()}
                  </span>{" "}
                </strike>
                &nbsp; মাত্র &nbsp;
                <span className="item_discount_price">
                  {getBookInfoApi.price - getBookInfoApi.discount}
                </span>
                &nbsp; টাকায়
              </p>
            </div>
          </div>

          <div className="bookDownloadPage-book-grid-die"></div>
          <div className="product-id-div"></div>
          <form>
            <div className="col-md-6">
              <div className="form-group">
                <label className="label">কুপন কোড ব্যবহার করুন</label>
                <div className="input-group">
                  <input
                    className="input input-bordered"
                    type="number"
                    placeholder=""
                    onChange={(e) => setCoupon_code(e.target.value)}
                    id="CouponCode"
                    name="CouponCode"
                    value={coupon_code}
                  />
                  <button
                    type="button"
                    className="btn"
                    onClick={handleCheckCoupon}
                  >
                    কুপন কোড চেক করুন
                  </button>
                </div>
                <span id="code_error"></span>
              </div>
            </div>

            <div className="form-group">
              <p>
                বইটির মূল্য{" "}
                <span id="numberPrice">
                  {Number(getBookInfoApi.price).toFixed(0)}
                </span>{" "}
                 টাকা প্রদান করুন।
              </p>
            </div>
            <div className="form-group payment_indication">
              <label className="payment_options">
                {" "}
                পেমেন্ট করতে নিচের যে কোন একটা পেমেন্ট অপশন বেছে নিন।
              </label>
              <p>
                বিকশ একাউন্টে সেন্ড মানি করুন এই নম্বরে{" "}
                <span>0196 144 9755</span>{" "}
              </p>
              <p>
                নগদ একাউন্টে সেন্ড মানি করুন এই নম্বরে{" "}
                <span>0196 144 9755</span>
              </p>
              <p>
                রকেট একাউন্টে সেন্ড মানি করুন এই নম্বরে{" "}
                <span>0163 888 5358 1</span>
              </p>
              <p>
                <span>
                  ব্যাংক একাউন্টে ডিপোজিট/আই ব্যাংকিং করুনঃ <br />
                </span>
                <span className="brack-bank-info">
                  BRAC BANK LIMITED.
                  <br />
                  Bank Accont Holder: Zakir Hossain. <br />
                  Account Num: 1501102568019001. 
                  <br />
                  Branch: Gulshan Branch.
                </span>
              </p>
            </div>
            <div className="form-group ">
              <label htmlFor="checked_field" className="">
                <button
                  className="payment_btn"
                  id="checked_field"
                  onClick={showInputField}
                >
                  <p className="do_payment">
                    পেমেন্ট করে এখানে ক্লিক করুন <br />
                    এবং নিচের ফিল্ডগুলো পুরণ করুন
                  </p>
                </button>
              </label>
            </div>

            <br />
            <div id="Show_hidden" hidden>
              <div className="form-group">
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
                    <option className="which_way" value="">
                      কোন মাধ্যমে পেমেন্ট করেছেন সিলেক্ট করতে এখানে ক্লিক করুন
                    </option>
                    <option className="e_bank" value="bKash">
                      বিকাশ
                    </option>
                    <option className="e_bank" value="Nagad">
                      নগদ
                    </option>
                    <option className="e_bank" value="Rocket">
                      রকেট
                    </option>
                    <option className="e_bank" value="bangk">
                      BANK ACCOUNT
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  যে নাম্বার থেকে পেমেন্ট পাঠাচ্ছেন / (ব্যংকে পাঠালে যে ব্যংক
                  থেকে পাঠানো হয়েছে সেই ব্যংকের নাম
                </label>
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setPayee_number(e.target.value)}
                  id="payee_number"
                  name="payee_number"
                  value={payee_number}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  ট্র্যান্স্যাকশন আই ডি নাম্বার / (ব্যংকে পাঠালে যে ব্যংক থেকে
                  পাঠানো হয়েছে সেই ব্যংকের এ্যাকাউন্ট নম্বর)
                </label>
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
                <label htmlFor="password">আপনার পুরো নাম</label>
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

              {success && (
                <div className="bookDownloadPage-success-div">
                  <p className="bookDownloadPage-success-p">
                    রিমোট জব বইটি কেনার জন্য আপনাকে ধন্যবাদ। আপনার এ্যাকাউন্ট
                    ভেরিফাই করে ড্যাশবোর্ড থেকে বইটি ডাউনলোড করুন
                    <br />
                    <br />
                    <Link className="btn" to="/">
                      Back to Home
                    </Link>
                  </p>
                </div>
              )}
              <button
                onClick={handleFrom}
                id="submitBtn"
                className=" submit-btn"
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
