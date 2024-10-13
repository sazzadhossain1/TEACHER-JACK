import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavigarionBar.css";

import teacherJackOnlineLogo from "../../accets/Images/Navigation-logo/teacherJackOnlineLogo.jpg";

const NavigationBar = () => {
  // const { user } = useContext(AuthContext);
  // console.log(user);

  const navigate = useNavigate();

  const getToken = localStorage.getItem("token");
  // console.log(getToken);

  // const getSignUpToken = localStorage.getItem("SignUpToken");

  // const id = localStorage.getItem("userId");

  const handleLogOut = () => {
    // console.log("logOUt SuccessFully");
    localStorage.clear();
    navigate("/login");
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="nav-parent-div">
      <div className="navbar    mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 small-display-ul"
            >
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to={`/productDetailsPage/${1}`}>BUY BOOK</Link>
              </li>
              <li>
                <Link to="/courses">COURSES</Link>
              </li>

              <li>
                <Link to="/videos">VIDEOS</Link>
              </li>

              <li>
                <Link to="#" onClick={scrollToFooter}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/liveCourse">LIVE COURSE</Link>
              </li>
              {getToken ? (
                <li tabIndex={0}>
                  <details>
                    <summary>My Account</summary>
                    <ul className="p-2">
                      <li>
                        <Link target="_blank" to="/userBuying">
                          My Purchase
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" to="/userSales">
                          My Sales
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              ) : (
                ""
              )}

              <div className="login-and-signUp-div-one">
                {getToken ? (
                  <button className="logOut-btn">
                    <Link to="/signUp">Log Out</Link>
                  </button>
                ) : (
                  <div>
                    <Link to="/login" className="">
                      <button className="login-one">Login</button>
                    </Link>
                    <Link to="/signUp" className="">
                      <button className="signUp-one">Sign Up</button>
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </div>

          <Link to="/" className="">
            <img
              className="Navigation-Teacher-Jack-Logo"
              src={teacherJackOnlineLogo}
              alt=""
            />
            {/* <h1 className="TeacherJackOnline">TeacherJackOnline</h1> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 large-display-ul">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to={`/productDetailsPage/${1}`}>BUY BOOK</Link>
            </li>
            <li>
              <Link to="/courses">COURSES</Link>
            </li>

            <li>
              <Link to="/videos">VIDEOS</Link>
            </li>

            <li>
              <Link to="#" onClick={scrollToFooter}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/liveCourse">LIVE COURSE</Link>
            </li>

            {getToken ? (
              <li className="my_account" tabIndex={0}>
                <details>
                  <summary>MY ACCOUNT</summary>
                  <ul className="p-2">
                    <li>
                      <Link
                        className="my_buyings_and_sales-Common"
                        target="_blank"
                        to="/userBuying"
                      >
                        My Purchase
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="my_buyings_and_sales-Common"
                        target="_blank"
                        to="/userSales"
                      >
                        My Sales
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="login-and-signUp-div">
            {getToken ? (
              <button onClick={handleLogOut} className="logOut-btn">
                Log Out
              </button>
            ) : (
              <div>
                <Link to="/login" className="login">
                  <button>Login</button>
                </Link>
                <Link to="/signUp" className="signUp">
                  <button>Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
