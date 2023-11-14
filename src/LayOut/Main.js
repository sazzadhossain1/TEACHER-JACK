import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
