import React, { useState } from "react";
import "./ForgetPassword.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleForgetPass(e) {
    e.preventDefault();
    console.log("btn clicked");

    let item = { email };
    let result = await fetch(
      "https://app.teacherjackonline.com/api/forget_password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    result = await result.json();
    console.log(result);

    if (result.data.email) {
      setSuccessMsg(
        "আপনার ই-মেইলে একটি মেইল পাঠানো হয়েছে। ই-মেইলে প্রবেশ করুন এবং আপনার পাসওয়ার্ড রিসেট করুন। ধন্যবাদ"
      );
      setErrorMsg("");
    } else if (result.data.null) {
      setSuccessMsg("");
      setErrorMsg("Email not match");
    }

    const hiddenButton = document.getElementById("forgetSubmitBtn");
    hiddenButton.setAttribute("hidden", "hidden");

    const forgatModalId = document.getElementById("forgatModalId");
    forgatModalId.removeAttribute("hidden", "hidden");
  }
  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head"> Forgot password?</h1>

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

            {successMsg && <p className="success-msg">{successMsg}</p>}
            {errorMsg && <p className="error-msg">{errorMsg}</p>}

            <div id="forgetSubmitBtn" className="sign-up-btn">
              <button onClick={handleForgetPass} className="">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div id="forgatModalId" className="forgetPassword-success-div" hidden>
        <p className="forgetPassword-success-p">
          আপনার ই-মেইলে একটি মেইল পাঠানো হয়েছে। ই-মেইলে প্রবেশ করুন এবং আপনার
          পাসওয়ার্ড রিসেট করুন। <br />
           ধন্যবাদ
          <br />
          <br />
          <Link className="forget_btn" to="/login">
            OK
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
