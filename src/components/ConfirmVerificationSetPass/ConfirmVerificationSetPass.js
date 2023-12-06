import React, { useEffect, useState } from "react";
import "./ConfirmVerificationSetPass.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ConfirmVerificationSetPass = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const form = location.state?.from?.pathname || "/";

  const { email, token } = useParams();

  const searchParams = new URLSearchParams(location.search);

  const [Email, setEmail] = useState("");
  const [Token, setToken] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setToken(Email);
    setEmail(Token);
    handleLogin();
  }, []);

  async function confirmVerification(e) {
    e.preventDefault();
    let values = { email, token, password };
    let apiUrl = `https://app.teacherjackonline.com/api/password_update`;
    let result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    result = await result.json();
    localStorage.setItem("token", result.data.token);
    localStorage.setItem("auth_user", result.data.user);
    localStorage.setItem("userId", result.data.user.id);

    if (result.data.token) {
      const confirm_success_div = document.getElementById(
        "confirm_success_div"
      );

      confirm_success_div.removeAttribute("hidden", "hidden");
      // navigation(form, { replace: true });
      // navigation(form);
    }

    localStorage.setItem("refer_code", result.data.user.refer_code);
    console.log("refer_code", result.data.user.refer_code);

    // localStorage.setItem("setLocalStorage_set_token", result.data.token);
  }

  async function handleLogin() {
    let item = { email, token };
    let apiUrl = `https://app.teacherjackonline.com/api/confirm/${email}/${token}`;
    let result = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    console.log(result);

    const submitForm = document.getElementById("submitForm");
    const loginButton = document.getElementById("loginButton");

    if (result.data) {
      submitForm.removeAttribute("hidden");
    } else {
      loginButton.removeAttribute("hidden");
    }
  }

  const showPass = () => {
    const getPassInputField = document.getElementById("password");
    getPassInputField.removeAttribute("type", "type");
    getPassInputField.setAttribute("type", "text");

    const showPassIcon = document.getElementById("showPassIcon");
    const hidePassIcon = document.getElementById("hidePassIcon");

    showPassIcon.setAttribute("hidden", "hidden");
    hidePassIcon.removeAttribute("hidden");
  };

  const hidePass = () => {
    const getPassInputField = document.getElementById("password");
    getPassInputField.removeAttribute("type", "type");
    getPassInputField.setAttribute("type", "password");

    const showPassIcon = document.getElementById("showPassIcon");
    const hidePassIcon = document.getElementById("hidePassIcon");

    showPassIcon.removeAttribute("hidden");
    hidePassIcon.setAttribute("hidden", "hidden");
  };
  return (
    <div className="signUp-parent-div">
      <div className="p-10">
        <div className="mx-auto confirmVerification-div p-5">
          <h1 className="heading1">Complete Verification</h1>

          <p className="verification">(ভেরিফিকেশন সম্পন্ন করুন)</p>

          <div className="loginButton" id="loginButton" hidden>
            <p className="loginInfo"></p>
            <Link className="loginBtn sign-up-btn" to="/login">
              Login
            </Link>
          </div>
          <br></br>
          <form onSubmit={confirmVerification} id="submitForm" hidden>
            <p className="set_you_password">
              নিচের{" "}
              <span className="Set_Your_Password">'Set Your Password'</span> ঘরে
              আপনি একটি পাসওয়ার্ড সেট করুন এবং এটি যত্নের সাথে সংরক্ষণ করুন।
              আপনার জন্য একটি এ্যাকাউন্ট তৈরি হয়েছে এবং এটিই আপনার লগ ইন
              পাসওয়ার্ড। <br />
              <br /> আমাদের সিস্টেম আপনার পেমেন্টের তথ্য যাচাই করে আপনাকে পুনরায়
              ই-মেইল পাঠাবে। অতঃপর আপনি আপনার এ্যাকাউনন্টে লগ ইন করে
              ড্যাশবোর্ডের My Account অপশনের My Purchase থেকে ডাউনলোড করুন।
            </p>
            <div className="form-group">
              <label htmlFor="password" className="password">
                Set Password
              </label>
              <label>
                নিচের ঘরটিতে মিনিমাম ৮ সংখ্যার একটি পাসওয়ার্ড টাইপ করে Submit
                বাটনে ক্লিক করুন
              </label>
              <div className="for_eye_icon_div">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  value={password}
                  required
                  placeholder="Set your new password"
                />
                <FontAwesomeIcon
                  id="showPassIcon"
                  onClick={showPass}
                  className="eye_icon"
                  icon={faEye}
                />
                <FontAwesomeIcon
                  id="hidePassIcon"
                  onClick={hidePass}
                  hidden
                  className="eye_icon"
                  icon={faEyeSlash}
                />
              </div>
            </div>
            <button className="submit_btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div id="confirm_success_div" className="confirm-success-div" hidden>
        <p className="confirm-success-p">
          আপনার এ্যাকাউন্ট তৈরি হয়েছে। সিস্টেমটি আপনার তথ্য যাচাই করে কিছুক্ষণের
          মধ্যে আটোম্যাটিক্যালি আপনার purchase এ্যাপ্রুভ করবে। Purchase
          এ্যাপ্রুভ হতে সর্বনিম্ন ১ মিনিট থেকে সর্বোচ্চ ৬ ঘন্টা সময় নিতে পারে।{" "}
          <br />
          Purchase এ্যাপ্রুভ হলে আপনি একটি ই-মেইল পাবেন। তারপর আপনি মেনু বারের
          My Account অপশনের My Purchase থেকে ডাইনলোড করতে পারবেন। ।
          <br />
          <br />
          <Link className="confirm_OK_btn" to="/">
            OK
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ConfirmVerificationSetPass;
