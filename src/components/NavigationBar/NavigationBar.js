import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavigarionBar.css";

import teacherJackOnlineLogo from "../../accets/Images/Navigation-logo/teacherJackOnlineLogo.jpg";
import { AuthContext } from "../context/UseContext";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

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
                <Link to="">BUY BOOK</Link>
              </li>
              <li>
                <Link to="/courses">COURSES</Link>
              </li>

              <li>
                <Link to="/videos">VIDEOS</Link>
              </li>

              <li tabIndex={0}>
                <details>
                  <summary>CONTACT</summary>
                  <ul className="p-2">
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li>

              <div className="login-and-signUp-div-one">
                {user?.data?.token ? (
                  <button className="logOut-btn">LogOut</button>
                ) : (
                  <div>
                    <Link to="/login" className="">
                      <button className="login-one">Login</button>
                    </Link>
                    <Link to="/signUp" className="">
                      <button className="signUp-one">SignUp</button>
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
              <Link to="">BUY BOOK</Link>
            </li>
            <li>
              <Link to="/courses">COURSES</Link>
            </li>

            <li>
              <Link to="/videos">VIDEOS</Link>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>CONTACT</summary>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/useBuyingDetails">User Buying </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="login-and-signUp-div">
            {user?.data?.token ? (
              <button className="logOut-btn">LogOut</button>
            ) : (
              <div>
                <Link to="/login" className="login">
                  <button>Login</button>
                </Link>
                <Link to="/signUp" className="signUp">
                  <button>SignUp</button>
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
