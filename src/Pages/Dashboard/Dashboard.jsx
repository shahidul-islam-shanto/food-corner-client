import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/images/hero-img/logo.png";

const Dashboard = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-6 ">
        {/* dashboard side ber */}
        <div className="col-span-4">
          <div className="bg-nu108 px-10 py-10">
            <div className="">
              <div className="text-center">
                <img className="w-18 h-18 border-2 border-nu10 bg-nu10 rounded-full " src={Logo} alt="" />
              </div>
              <div className="">
                <h2 className="">Food Corner</h2>
                <h4 className="">Restaurant</h4>
              </div>
            </div>

            <ul>
              <li>
                <NavLink to={"/dashboard/dashCard"}>My Card</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/dashCard"}>My App Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/dashCard"}>User Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* dashboard Main  */}
        <div className="col-span-8">
          <div className="py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
