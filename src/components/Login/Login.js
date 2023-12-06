import React from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/UseContext";

const Login = () => {
  // For Safari
  document.body.scrollTop = 0;

  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setUser } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();
    // console.log("data", email, password);

    let item = { email, password };
    let result = await fetch("https://app.teacherjackonline.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    setUser(result);
    console.log(result);
    // console.log(result.data.user.refer_code);
    localStorage.setItem("storeReferCode", result.data.user.refer_code);

    localStorage.setItem("token", result.data.token);
    localStorage.setItem("email", result.data.user.email);
    localStorage.setItem("userId", result.data.user.id);
    localStorage.setItem("refer_code", result.data.user.refer_code);

    if (result.data.token) {
      navigation(from, { replace: true });
    }
  }

  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">Login</h1>
          <h4 className="start-text">
            নিচের ঘরগুলো পুরণ করে আপনার এ্যাকাউন্টে লগ ইন করুন
          </h4>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  নিচের বক্সে আপনার ই-মেইল এ্যড্রেসটি লিখুন
                </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  নিচের বক্সে আপনার পাসওয়ার্ডটি লিখুন
                </span>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>

            <Link to="/forgetPassword" style={{ color: "blue" }}>
              পাসওয়ার্ড ভুলে গেলে এখানে ক্লিক করুন
            </Link>

            <h1 style={{ color: "black" }} className="m-5">
              এই সাইটে আপনি নতুন হলে সাইন আপ লেখাটিতে ক্লিক করুন {" "}
              <Link className="signUp_from_login" to="/signUp">
                Sign Up
              </Link>
            </h1>

            <p style={{ color: "red" }}>{error}</p>
            {/* {success && (
              <p style={{ color: "greenyellow" }}>User Login Successfully</p>
            )} */}
            <div className="sign-up-btn">
              <button onClick={handleLogin} className="login_submit">
                {/* লগ ইন করতে এখানে ক্লিক করুন */}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
