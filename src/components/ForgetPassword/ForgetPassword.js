import React, { useState } from "react";
import "./ForgetPassword.css";

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
      setSuccessMsg("Please check your email.");
      setErrorMsg("");
    } else if (result.data.null) {
      setSuccessMsg("");
      setErrorMsg("Email not match");
    }

    const hiddenButton = document.getElementById("forgetSubmitBtn");
    hiddenButton.setAttribute("hidden", "hidden");
  }
  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head"> Forgot password?</h1>

          <form className="card-body">
            <div className="form-control">
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
    </div>
  );
};

export default ForgetPassword;
