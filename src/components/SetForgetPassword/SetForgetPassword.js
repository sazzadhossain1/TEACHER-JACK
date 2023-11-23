import React, { useEffect, useState } from "react";
import "./SetForgetPassword.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SetForgetPassword = () => {
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigation = useNavigate();
  const form = location.state?.from?.pathname || "/login";

  const [password, setPassword] = useState("");
  let { token } = useParams();
  console.log(token);

  async function handleSetPassword(e) {
    e.preventDefault();
    let values = { password, token };
    // console.log(values);

    try {
      let apiUrl = "https://app.teacherjackonline.com/api/reset_password";
      let result = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      result = await result.json();
      console.log(result);

      if (result.data.id) {
        alert("Password update successfully please login");
        navigation(form);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const show_icon = () => {
    const hideIcon = document.getElementById("hide_icon");
    console.log(hideIcon);
  };

  const hide_icon = () => {
    console.log("hide icon btn clicked");
  };
  return (
    <div className="signUp-parent-div">
      <div className="p-10">
        <div className="mx-auto signup-div p-5">
          <h1 className="heading1">Reset your password </h1>

          <form id="submitForm" onSubmit={handleSetPassword}>
            <p className="set_you_password"></p>
            <div className="form-group">
              <label htmlFor="password" className="password">
                Set Password
              </label>
              <label>Please input a minimum of 8 characters</label>
              <div className="password_input_div">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Set your new password"
                />
                <FontAwesomeIcon
                  id="show_icon"
                  className="pass_icon"
                  icon={faEye}
                  onClick={show_icon}
                />
                <FontAwesomeIcon
                  id="hide_icon"
                  className="pass_icon"
                  icon={faEyeSlash}
                  onClick={hide_icon}
                  hidden
                />
              </div>
            </div>
            <button className="submit_btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetForgetPassword;
