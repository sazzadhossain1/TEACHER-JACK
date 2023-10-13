import React from "react";
import "./PaymentSystem.css";
import { Link } from "react-router-dom";
import bkashPhoto from "../../accets/Images/OnlineBankingPhoto/bkashPhoto.webp";
import upayPhoto from "../../accets/Images/OnlineBankingPhoto/upayPhoto.webp";
import nagadPhoto from "../../accets/Images/OnlineBankingPhoto/nagadPhoto.webp";
import rocketPhoto from "../../accets/Images/OnlineBankingPhoto/rocketPhoto.webp";

const PaymentSystem = () => {
  return (
    <div className="payment-system-parent-div">
      <h1 className="payment-method-heading">
        Payment <span className="method">Method</span>
      </h1>
      <div className="payment-system-blank-div"></div>
      <h2 className="payment-method-bangla-heading">
        পেমেন্ট করে ফর্মটি ফিলাপ করুন
      </h2>
      <Link>
        <button className="fillUp-form-btn">FILL UP FORM</button>
      </Link>
      {/* grid cart start */}
      <div className="payment-system-account-grid-div">
        <div className="payment-system-number-div">
          <div className="payment-system-flex-div">
            <img className="payment-logo-photo" src={bkashPhoto} alt="" />
            <p className="payment-number">017xxxxxxxx (Personal)</p>
          </div>
          <div className="payment-system-flex-div">
            <img className="payment-logo-photo" src={bkashPhoto} alt="" />
            <p className="payment-number">017xxxxxxxx (Personal)</p>
          </div>
          <div className="payment-system-flex-div">
            <img className="payment-logo-photo" src={nagadPhoto} alt="" />
            <p className="payment-number">017xxxxxxxx (Personal)</p>
          </div>
          <div className="payment-system-flex-div">
            <img className="payment-logo-photo" src={rocketPhoto} alt="" />
            <p className="payment-number">017xxxxxxxx (Personal)</p>
          </div>
          <div className="payment-system-flex-div">
            <img className="payment-logo-photo" src={upayPhoto} alt="" />
            <p className="payment-number">017xxxxxxxx (Personal)</p>
          </div>
        </div>
        {/* ---- */}
        <div>
          <div>
            <div className="payment-bank-account-flex-div">
              <img className="payment-logo-photo" src={upayPhoto} alt="" />
              <p className="payment-bank-text">ISLAMI BANK BANGLADESH LTD</p>
            </div>
            <p className="payment-bank-text">Account Holder: zzzzzzzzzz</p>
            <p className="payment-bank-text">Account No: zxzxzxzxzxzxzxzxzx</p>
          </div>
          <div>
            <div className="payment-bank-account-flex-div">
              <img className="payment-logo-photo" src={upayPhoto} alt="" />
              <p className="payment-bank-text">United Commercial Bank (UCB)</p>
            </div>
            <p className="payment-bank-text">Account Holder: zzzzzzzzzz</p>
            <p className="payment-bank-text">Account No: zzzzzzzzzzzzzzzzzz</p>
          </div>
        </div>
        {/*  */}
        <div>
          <h2 className="personal-contact-text">
            ইন্ডিয়া বা অন্য দেশ থেকে যারা কোর্স ফি প্রদান করবেন তারা personally
            কন্টাক্ট করুন
          </h2>
          <div className="payment-system-phone-logo">
            <i class="fa-solid fa-phone"></i>
            <p>01700000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem;
