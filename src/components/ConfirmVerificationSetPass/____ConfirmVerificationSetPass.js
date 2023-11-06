import React, { useEffect, useState } from "react";
import "./ConfirmVerificationSetPass.css";
import { useLoaderData } from "react-router-dom";

const ConfirmVerificationSetPass = () => {
  // const { user } = useContext(AuthContext);
  // console.log(user);

  // const getApi = useLoaderData();
  // console.log(getApi.data);

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const tokenId = localStorage.getItem("token");
  const emailId = localStorage.getItem("email");

  useEffect(() => {
    setToken(tokenId);
    setEmail(emailId);
    // console.log(tokenId);
  }, []);


  async function handleLogin(e) {
    e.preventDefault();
    // console.log(email, token, password);

    let item = { email, token, password };

    let result = await fetch(
      "https://app.teacherjackonline.com/api/password_update",
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
    // console.log(result);
  }
  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
      <h1>Confirm Verifiaction</h1>
      <br></br>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              {/* <h1>{getApi.message}</h1> */}
              {/* <label htmlFor="email">Email </label> */}
              <input type="hidden"
                onChange={(e) => setEmail(e.target.value)}
                id="email" name="email" value={email}
              />
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
              <input type="password" 
                  onChange={(e) => setPassword(e.target.value)} id="password" name="password"
                value={password} required placeholder="Set your new password"
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
