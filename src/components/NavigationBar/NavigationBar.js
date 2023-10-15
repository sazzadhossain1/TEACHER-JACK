import React from "react";
import { Link } from "react-router-dom";
import "./NavigarionBar.css";
import NavigationTeacherJackLogo from "../../accets/Images/Navigation-logo/NavigationTecherJackLogo.jpg";
import teacherJackLogo from "../../accets/Images/Navigation-logo/teacherJackLogo.png";
import teacherJackOnlineLogo from "../../accets/Images/Navigation-logo/teacherJackOnlineLogo.jpg";

const NavigationBar = () => {
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
                <a>HOME</a>
              </li>
              <li>
                <Link>FEATURES</Link>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link>OPTION</Link>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link>LEARN</Link>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link>WHO WE ARE</Link>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link>PARTNERSHIP</Link>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>

              <div className="login-and-signUp-div-one">
                <Link to="/login">
                  <button className="login-one">Login</button>
                </Link>
                <br />
                <Link to="/signUp">
                  <button className="signUp-one">SignUp</button>
                </Link>
              </div>
            </ul>
          </div>

          <Link to="/home" className="">
            {/* <img
              className="Navigation-Teacher-Jack-Logo"
              src={teacherJackOnlineLogo}
              alt=""
            /> */}
            <h1 className="TeacherJackOnline">TeacherJackOnline</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 large-display-ul">
            <li>
              <Link to="/home">HOME</Link>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>BUY BOOK</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>COURSES</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>PROFILE</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>AFFILIATE PROGRAM</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>CONTACT</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="login-and-signUp-div">
            <Link to="/login" className="login">
              <button>Login</button>
            </Link>
            <Link to="/signUp" className="signUp">
              <button>SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
