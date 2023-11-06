import React, { useEffect, useState } from "react";
import "./ConfirmVerificationSetPass.css";
import { Link, useLoaderData, useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";

const ConfirmVerificationSetPass = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const form = location.state?.from?.pathname || "/userBuying";

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

  async function confirmVerification(e)
  {
    e.preventDefault();
    let values = {email, token, password};
    let apiUrl = `https://app.teacherjackonline.com/api/password_update`
    let result = await fetch( apiUrl, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body:JSON.stringify(values)
      });
      result = await result.json();
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("auth_user", result.data.user);
      localStorage.setItem("userId", result.data.user.id);
      if (result.data.token) {
        navigation(form, { replace: true });
      }
      console.log(result);

  }

  async function handleLogin() 
  {
    let item = { email, token};
    let apiUrl = `https://app.teacherjackonline.com/api/confirm/${email}/${token}`
    let result = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    result = await result.json();

    const submitForm  = document.getElementById('submitForm');
    const loginButton = document.getElementById('loginButton');

    if(result.data)
    {
      submitForm.removeAttribute('hidden');
    }
    else
    {
      loginButton.removeAttribute('hidden');
    }

  }

  return (
    <div className="signUp-parent-div">
      <div className="p-10">
        <div className="mx-auto signup-div p-5">
          <h1 className="heading1">Confirm Verifiaction</h1>
          <div className="loginButton" id="loginButton" hidden>
            <p className="loginInfo">Your account already verified. Please login to your panel.</p>
            <Link className="loginBtn sign-up-btn" to="/login">Login</Link>
          </div>
          <br></br>
          <form onSubmit={confirmVerification} id="submitForm" hidden>
            <div className="form-group">
              <label htmlFor="password">Set Password</label>
              <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password" name="password" value={password} required
                placeholder="Set your new password"
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

export default ConfirmVerificationSetPass;

// https://app.teacherjackonline.com/api/{uri}
// https://app.teacherjackonline.com/api/check/{email}/{token}
