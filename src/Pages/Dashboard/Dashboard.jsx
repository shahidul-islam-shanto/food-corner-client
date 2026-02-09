import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/images/hero-img/logo.png";
import { IoHomeSharp } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-6 ">
        {/* dashboard side ber */}
        <div className="col-span-3">
          <div className="bg-nu108 px-10 py-10 h-screen">
            <div className="mb-10">
              <Link to={"/"}>
                <div className="flex items-center text-center gap-2 mb-4">
                  <img
                    className="w-12 h-12 border-2 border-nu10 bg-nu10 rounded-full "
                    src={Logo}
                    alt=""
                  />
                  <h2 className="">Food Corner</h2>
                </div>
              </Link>
              <h4 className="">Restaurant</h4>
            </div>

            <ul>
              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <IoHomeSharp className="text-[24px]" />
                <NavLink
                  to={"/dashboard/adminHome"}
                  className="text-[20px] font-medium uppercase"
                >
                  Admin Home
                </NavLink>
              </li>
              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <ImSpoonKnife className="text-[24px]" />
                <NavLink
                  to={"/dashboard/addItems"}
                  className="text-[20px] font-medium uppercase"
                >
                  Add Items
                </NavLink>
              </li>
              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <FaListUl className="text-[24px]" />
                <NavLink
                  to={"/dashboard/manageItems"}
                  className="text-[20px] font-medium uppercase"
                >
                  Manage Items
                </NavLink>
              </li>
              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <FaBook className="text-[24px]" />
                <NavLink
                  to={"/dashboard/dashCard"}
                  className="text-[20px] font-medium uppercase"
                >
                  Manage Bookings
                </NavLink>
              </li>
              <li className=" flex items-center gap-2 hover:text-nu10 duration-300">
                <HiUserGroup className="text-[24px]" />
                <NavLink
                  to={"/dashboard/allUsers"}
                  className="text-[20px] font-medium uppercase"
                >
                  All Users
                </NavLink>
              </li>
              <span className="mb-10 border-b-2 pb-8"></span>

              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <IoHomeSharp className="text-[24px]" />
                <NavLink
                  to={"/dashboard/dashCard"}
                  className="text-[20px] font-medium uppercase"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <IoMenu className="text-[24px]" />
                <NavLink
                  to={"/dashboard/menu"}
                  className="text-[20px] font-medium uppercase"
                >
                  Menu
                </NavLink>
              </li>
              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <FaBagShopping className="text-[24px]" />
                <NavLink
                  to={"/dashboard/shop"}
                  className="text-[20px] font-medium uppercase"
                >
                  Shop
                </NavLink>
              </li>
              <li className="mb-6 flex items-center gap-2 hover:text-nu10 duration-300">
                <MdEmail className="text-[24px]" />
                <NavLink
                  to={"/dashboard/contact"}
                  className="text-[20px] font-medium uppercase"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* dashboard Main  */}
        <div className="col-span-9">
          <div className="py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
