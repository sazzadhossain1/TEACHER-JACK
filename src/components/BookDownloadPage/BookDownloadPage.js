import React, { useContext, useEffect } from "react";
import "./BookDownloadPage.css";
import { useState } from "react";
// import bookPhoto from "../../accets/Images/hero-section-photo/BookCoverPage.jpg";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/UseContext";

const BookDownloadPage = () => {
  const getBookInfoApi = useLoaderData();
  console.log(getBookInfoApi);
  const { setUser } = useContext(AuthContext);

  const { id } = getBookInfoApi;

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
      let url = "https://app.teacherjackonline.com/api/sale"
      let result = await fetch(url, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(inputItem),
        });

      result = await result.json();
      console.log("result", result);
      setUser(result);
      // console.log(result);
    } catch (error) {
      console.log("error", error);
    }
    // console.log(inputItem);
  }

  return (
    <div className="submit-up-parent-div">
      <div className="submit-child-div">
        <div className="submit-form">
          <h2 className="submit-title">নিচের ফর্মটি পুরণ করুন</h2>
          <div className="bookDownloadPage-book-grid-die">
            {/* <div className="bookDownloadPage-img-div">
              <img className="bookDownloadPage-img" src={bookPhoto} alt="" />
            </div>
            <div className="bookDownloadPage-text-div">
              <h2 className="bookDownloadPage-h2">
                Best Freelancing book 2023
              </h2>
              <p className="bookDownloadPage-p">Price: 300.00 TK</p>
              <Link to="/bookDetailsPage">
                <button className="goBackBookDetails">
                  Go Back Book Details
                </button>
              </Link>
            </div> */}
          </div>
          <div className="product-id-div"></div>
          <form onSubmit={handleFrom}>
            {/* <div className="form-group">
              <label htmlFor="CouponCode">Product Id</label>
              <input
                type="number"
                onChange={(e) => setProduct_id(e.target.value)}
                id="product_id"
                name="product_id"
                value={product_id}
                required
              />
            </div> */}
            <p>Coupon Code ব্যবহার করলেই পাচ্ছেন 10%  ডিসকাউন্ট</p>
            <br></br>
            <div className="form-group">
              <label><input type="checkbox" name="coupon_code" value="Yes" id="cc_agree" /> আমি কুপন কোড ব্যবহার করতে চাই</label>
            </div>
            <div className="form-group" id="coupon_field" hidden>
              <label htmlFor="CouponCode">কুপন কোড</label>
              <input type="number" onChange={(e) => setCoupon_code(e.target.value)} id="CouponCode" name="CouponCode"
                value={coupon_code}
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="PaymentMethod">Payment Method</label>
              <input
                type="text"
                onChange={(e) => setPay_method(e.target.value)}
                id="pay_method"
                name="pay_method"
                value={pay_method}
                required
              />
            </div> */}
            {/*  */}
            <div className="form-group">
              <label htmlFor="PaymentMethod">কোন মাধ্যমে পেমেন্ট করছেন</label>
              <select required className="select-option" name="pay_method" id="pay_method" type="text" value={pay_method} onChange={(e) => setPay_method(e.target.value)}
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
            <button className="sign-up-btn submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

let cc_agree = document.getElementById('cc_agree');
let coupon_field = document.getElementById('coupon_field');
// console.log(cc_agree);
cc_agree.addEventListener('change', ccAction);
function ccAction()
{
  coupon_field.removeAttribute('hidden');
  console.log(cc_agree);
}
export default BookDownloadPage;