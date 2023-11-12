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
  const refer_code = localStorage.getItem("refer_code");
  console.log(refer_code);

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

    // console.log(typeof coupon_code);
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

  const handleCheckCoupon = (e) => {
    e.preventDefault();
    console.log("Coupon Check Button Clicked");

    if (refer_code === coupon_code) {
      alert(
        "Your coupon code is match. You get 10% discount.You have to pay 270 taka"
      );
    } else {
      // const Show_hidden = document.getElementById("Show_hidden");
      // console.log(Show_hidden.removeAttribute("hidden"));
      alert(
        "Your coupon code does not match you have to pay 300 taka. If you have the correct coupon code please put it in the coupon code field and get will 10% discount "
      );
    }
  };

  const showInputField = (e) => {
    e.preventDefault();
    const Show_hidden = document.getElementById("Show_hidden");
    console.log(Show_hidden.removeAttribute("hidden"));
  };

  // BKash function //
  const handleBKash = (e) => {
    e.preventDefault();
    const getBKash = document.getElementById("BKash");
    getBKash.removeAttribute("hidden");

    const getNagad = document.getElementById("Nagad");
    const getRocket = document.getElementById("Rocket");
    const getBank = document.getElementById("Bank");
    getNagad.setAttribute("hidden", "hidden");
    getRocket.setAttribute("hidden", "hidden");
    getBank.setAttribute("hidden", "hidden");

    // ------

    const get_li_Nagad = document.getElementById("li_Nagad");
    const get_li_Rocket = document.getElementById("li_Rocket");
    const get_li_Bank = document.getElementById("li_Bank");

    get_li_Nagad.removeAttribute("class", "className");
    get_li_Rocket.removeAttribute("class", "className");
    get_li_Bank.removeAttribute("class", "className");

    const get_li_BKash = document.getElementById("li_BKash");
    get_li_BKash.setAttribute("class", "BKash");
    console.log(get_li_BKash);
  };
  // --------------------------- //

  // Nagad function //
  const handleNagad = (e) => {
    e.preventDefault();
    const getNagad = document.getElementById("Nagad");
    getNagad.removeAttribute("hidden");

    const getBKash = document.getElementById("BKash");
    const getRocket = document.getElementById("Rocket");
    const getBank = document.getElementById("Bank");
    getBank.setAttribute("hidden", "hidden");
    getBKash.setAttribute("hidden", "hidden");
    getRocket.setAttribute("hidden", "hidden");

    // ---

    const get_li_BKash = document.getElementById("li_BKash");
    const get_li_Rocket = document.getElementById("li_Rocket");
    const get_li_Bank = document.getElementById("li_Bank");

    get_li_Bank.removeAttribute("class", "className");
    get_li_BKash.removeAttribute("class", "className");
    get_li_Rocket.removeAttribute("class", "className");

    const get_li_Nagad = document.getElementById("li_Nagad");
    get_li_Nagad.setAttribute("class", "Nagad");
    console.log(get_li_Nagad);
  };
  // ------------------------------ //

  // Rocket function//
  const handleRocket = (e) => {
    e.preventDefault();
    const getRocket = document.getElementById("Rocket");
    getRocket.removeAttribute("hidden");

    const getNagad = document.getElementById("Nagad");
    const getBKash = document.getElementById("BKash");
    const getBank = document.getElementById("Bank");

    getBank.setAttribute("hidden", "hidden");
    getNagad.setAttribute("hidden", "hidden");
    getBKash.setAttribute("hidden", "hidden");

    // -------

    const get_li_BKash = document.getElementById("li_BKash");
    const get_li_Nagad = document.getElementById("li_Nagad");
    const get_li_Bank = document.getElementById("li_Bank");

    get_li_Bank.removeAttribute("class", "className");
    get_li_BKash.removeAttribute("class", "className");
    get_li_Nagad.removeAttribute("class", "className");

    const get_li_Rocket = document.getElementById("li_Rocket");
    get_li_Rocket.setAttribute("class", "Rocket");
    console.log(get_li_BKash);
  };
  // ----------------------//

  // Bank Function //
  const handleBank = (e) => {
    e.preventDefault();
    const getBank = document.getElementById("Bank");
    getBank.removeAttribute("hidden");

    const getBKash = document.getElementById("BKash");
    const getNagad = document.getElementById("Nagad");
    const getRocket = document.getElementById("Rocket");

    getRocket.setAttribute("hidden", "hidden");
    getNagad.setAttribute("hidden", "hidden");
    getBKash.setAttribute("hidden", "hidden");

    //--------

    const get_li_BKash = document.getElementById("li_BKash");
    const get_li_Nagad = document.getElementById("li_Nagad");
    const get_li_Rocket = document.getElementById("li_Rocket");

    get_li_BKash.removeAttribute("class", "className");
    get_li_Nagad.removeAttribute("class", "className");
    get_li_Rocket.removeAttribute("class", "className");

    const get_li_Bank = document.getElementById("li_Bank");
    get_li_Bank.setAttribute("class", "Bank");
    console.log(get_li_Bank);
  };
  // -------------------------

  return (
    <div className="submit-up-parent-div">
      <div className="submit-child-div">
        <div className="submit-form">
          <h2 className="submit-title">নিচের ঘরটি পুরণ করুন</h2>
          {/* <p>{getBookInfoApi.name}</p>
          <p>{getBookInfoApi.price}</p> */}

          <div className="product_parent_div">
            <div className="product_img">
              <img
                className="img-bb"
                src={`http://app.teacherjackonline.com/${getBookInfoApi.image}`}
                alt=""
              />
            </div>
            <div className="product_info">
              <h1 className="product_title">Remote Job book</h1>
              <p className="product_price">
                Price: <span>300</span> taka
              </p>
              <p className="product_discount">
                কুপন কোড ব্যবহারে পাচ্ছেন <span>১০%</span> ডিসকাউন্ট
              </p>
              <p>
                <del>
                  <span className="item_price">300</span>
                </del>{" "}
                &nbsp;
                <span className="item_discount_price">270</span> টাকায়
              </p>
            </div>
          </div>

          <div className="bookDownloadPage-book-grid-die"></div>
          <div className="product-id-div"></div>
          <form>
            <div className="form-control">
              <label className="label">
                {/* <span className="CouponCode">কুপন কোড থাকলে এখানে লিখুন</span> */}
                <p> কুপন কোড ব্যবহার করুন</p>
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
            {/*  */}
            {/* <div className="form-group">
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
            </div> */}
            {/*  */}
            {/* Try new way start */}
            <br />
            <div>
              <ul className="tabs_ul">
                <li>
                  <button htmlFor="payment_bkash">
                    <label>
                      <input type="radio" id="payment_bkash" />
                      BKash
                    </label>
                  </button>
                </li>
                <li id="li_BKash" className="BKash" onClick={handleBKash}>
                  <label htmlFor="input_bkash">
                    <input id="input_bkash" type="radio" />
                    বিকাশ : 01961449755
                  </label>
                </li>
                <li id="li_Nagad" className="Nagad" onClick={handleNagad}>
                  নগদ : 01961449755
                </li>
                <li id="li_Rocket" className="Rocket" onClick={handleRocket}>
                  রকেট : 016388853581
                </li>
                <li id="li_Bank" className="Bank" onClick={handleBank}>
                  Bank
                </li>
              </ul>
              <div id="BKash" hidden>
                <div className="tab_grid_cart">
                  <div className="tab_cart">
                    <h1 className="BKash_Number">*247#</h1>
                    <button></button>
                  </div>

                  {/*  */}

                  <div className="tab_cart">
                    <p>BKash</p>
                    <ol>
                      <li>1.Send Money</li>
                      <li>2.Mobile Recharge</li>
                      <li>3.Payment</li>
                      <li>4.Cash Out</li>
                      <li>5.Pay Bill</li>
                      <li>6.App Registration</li>
                      <li>7.My bkash</li>
                      <li>8.My Helpline</li>
                    </ol>
                    <button>
                      <p>Send</p>
                      <p>Exit</p>
                    </button>
                  </div>
                  <div className="tab_cart">
                    <h1>BKash Account Number</h1>
                    <p>01719988494</p>
                    <button>
                      <p>Send</p>
                      <p>Exit</p>
                    </button>
                  </div>
                  <div className="tab_cart">
                    <h1>Enter Amount</h1>
                    <p>xxxxx</p>
                    <button>
                      <p>Send</p>
                      <p>Exit</p>
                    </button>
                  </div>
                </div>
              </div>
              <div id="Nagad" hidden>
                <h3>নগদ </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam dolorem cumque unde architecto impedit illum tenetur
                  natus expedita veritatis harum.
                </p>
              </div>
              <div id="Rocket" hidden>
                <h3>রকেট</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam dolorem cumque unde architecto impedit illum tenetur
                  natus expedita veritatis harum.
                </p>
              </div>
              <div id="Bank" hidden>
                <h3>Bank</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam dolorem cumque unde architecto impedit illum tenetur
                  natus expedita veritatis harum.
                </p>
              </div>
            </div>
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
