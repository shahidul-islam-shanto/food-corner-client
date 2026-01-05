import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBer from "../Components/NavBer/NavBer";

const Root = () => {
  return (
    <div>
      <NavBer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
