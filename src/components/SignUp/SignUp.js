import React, { useContext } from "react";
import "./SignUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/UseContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigation = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // pass user //
  const { setUser } = useContext(AuthContext);

  // Create User //

  async function handleSignUp(e) {
    e.preventDefault();

    let item = { name, email, phone, password, confirm_password };
    console.log(item);
    // console.log(confirm_password);
    try {
    } catch {}
    let result = await fetch("https://app.teacherjackonline.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    setSuccess(true);
    console.log("result", result);
    setUser(result);

    localStorage.setItem("SignUpToken", result.data.token);

    if (result.data.token) {
      navigation(from, { replace: true });
      alert("User Created SuccessFully Please Login");
    }
    // Password Validation //
    if (password !== confirm_password) {
      setError("Password Not Match");
      setSuccess(false);
      return;
    }

    if (result.data.token) {
      setError("");
      return;
    }
  }

  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">Sign Up</h1>
          <h4 className="start-text">Get started with us today!</h4>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Your Name"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter Your Email"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <label className="input-group">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  name="phone"
                  value={phone}
                  placeholder="Enter Your Phone Number"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <label className="input-group">
                <input
                  onChange={(e) => setConfirm_Password(e.target.value)}
                  type="password"
                  name="confirm_password"
                  value={confirm_password}
                  placeholder="Confirm Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <p style={{ color: "red" }}>{error}</p>
            {success && (
              <p style={{ color: "greenyellow" }}>User Created successfully</p>
            )}
            <h1 style={{ color: "black" }} className="m-5">
              Already have an account?{" "}
              <Link style={{ color: "blue" }} to="/login">
                Please Login
              </Link>
            </h1>

            <div className="  sign-up-btn ">
              <button className="">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
