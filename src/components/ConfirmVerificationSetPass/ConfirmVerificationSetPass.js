import React, { useEffect, useState } from "react";
import "./ConfirmVerificationSetPass.css";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

const ConfirmVerificationSetPass = () => {
  const location = useLocation();
  console.log(location.search);

  const { email, token } = useParams();
  console.log(email, token);

  const searchParams = new URLSearchParams(location.search);
  // const email = searchParams.get("email");
  // const token = searchParams.get("token");
  // console.log(email, token);
  // const { user } = useContext(AuthContext);
  // console.log(user);

  // const getApi = useLoaderData();
  // console.log(getApi.data);

  const [Email, setEmail] = useState("");
  const [Token, setToken] = useState("");
  const [password, setPassword] = useState("");

  // console.log(email, token, password);

  // const tokenId = localStorage.getItem("token");
  // const emailId = localStorage.getItem("email");
  // console.log(tokenId);

  useEffect(() => {
    setToken(Email);
    setEmail(Token);
    // console.log(tokenId);
  }, []);
  async function handleLogin(e) {
    e.preventDefault();

    let item = { email, token, password };
    console.log(item);
    let result = await fetch(
      `https://app.teacherjackonline.com/api/check/${email}/${token}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    result = await result.json();
    console.log(result);
  }
  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1>Confirm Verifiaction</h1>
          <p>{location.pathname.replace("/", " ")}</p>
          <p>email: {email}</p>
          <p>Token: {token}</p>
          <br></br>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              {/* <h1>{getApi.message}</h1> */}
              {/* <label htmlFor="email">Email </label> */}
              {/* <input
                type="hidden"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                value={email}
              /> */}
            </div>

            {/* <div className="form-group">
              <label htmlFor="token">Token</label>
              <input
                type="text"
                onChange={(e) => setToken(e.target.value)}
                id="token"
                name="token"
                value={token}
                // required
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="password">Set Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                value={password}
                required
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
