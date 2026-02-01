import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>this is a Dashboard</h1>
      <div className="grid grid-cols-12 gap-6">
        {/* dashboard side ber */}
        <div className="col-span-4">
          <div className="bg-nu40 px-10 py-10">
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
