import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
