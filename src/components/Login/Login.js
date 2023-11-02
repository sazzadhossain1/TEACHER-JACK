import React from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/UseContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setUser } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();
    console.log("data", email, password);

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
    console.log(result.data.token);
    setUser(result);
    console.log(result);

    if (result.data.token) {
      navigation(from, { replace: true });
    }
  }
  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">Login</h1>
          <h4 className="start-text">Get started with us today!</h4>
          <form className="card-body  mx-auto">
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
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
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Password</span>
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

            <h1 style={{ color: "black" }} className="m-5">
              You new to this site?{" "}
              <Link style={{ color: "blue" }} to="/signUp">
                Please SignUp
              </Link>
            </h1>

            {/* <p style={{ color: "red" }}>{error}</p> */}
            {/* {success && (
              <p style={{ color: "greenyellow" }}>User Login Successfully</p>
            )} */}
            <div className="  sign-up-btn ">
              <button onClick={handleLogin} className="">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
