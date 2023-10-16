import React from "react";
import "./PaymentSystem.css";
import { Link } from "react-router-dom";
import bkashPhoto from "../../accets/Images/OnlineBankingPhoto/bkashPhoto.webp";
import upayPhoto from "../../accets/Images/OnlineBankingPhoto/upayPhoto.webp";
import nagadPhoto from "../../accets/Images/OnlineBankingPhoto/nagadPhoto.webp";
import rocketPhoto from "../../accets/Images/OnlineBankingPhoto/rocketPhoto.webp";

// Mohammad Zakir Hossain
// BRAC BANK LIMITED
// Account Number: 1501102568019001
// Routing Number/Swift Code: BRAKBDDH
// Account Type: Triple Benefit Account
// Branch: Gulshan Branch, Dhaka, Bangladesh

// India বা অন্য কোন দেশ থেকে Paypal -এ বা ক্রেডিট কার্ডে পেমেন্ট করতে যোগাযোগ করুন -
// teacherjackonline@gmail.com এই ই-মেইলে

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
            <p className="payment-number">Bkash personal: 01961449755</p>
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
              {/* <img className="payment-logo-photo" src={upayPhoto} alt="" /> */}
              <i class="fa-solid fa-building-columns"></i>
              <p className="payment-bank-text">BRAC BANK LIMITED</p>
            </div>
            <p className="payment-bank-text">
              Account Holder: Mohammad Zakir Hossain
            </p>
            <p className="payment-bank-text">
              Account Number: 1501102568019001
            </p>
            <p className="payment-bank-text">
              Routing Number/Swift Code: BRAKBDDH
            </p>
            <p className="payment-bank-text">
              Account Type: Triple Benefit Account
            </p>
            <p className="payment-bank-text">
              Branch: Gulshan Branch, Dhaka, Bangladesh
            </p>
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
            India বা অন্য কোন দেশ থেকে Paypal -এ বা ক্রেডিট কার্ডে পেমেন্ট করতে
            যোগাযোগ করুন - teacherjackonline@gmail.com এই ই-মেইলে।
          </h2>
          {/* <div className="payment-system-phone-logo">
            <i class="fa-solid fa-phone"></i>
            <p>01700000000</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem;
