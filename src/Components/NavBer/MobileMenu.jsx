import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ open, setOpen }) => {
  const [jsOpen, setJsOpen] = useState(false);

  return (
    <>
      <div className=" flex lg:hidden justify-center items-center">
        <div
          className={`fixed top-0 left-0 h-full w-full bg-primary1 p-5 transition-transform duration-300  ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end text-nu20 mb-6">
            <button onClick={() => setOpen(false)}>
              <span>
                <IoCloseSharp className="text-[28px]" />
              </span>
            </button>
          </div>

          <ul className="space-y-3 text-nu20 m-auto text-center w-full h-full py-40">
            <li className="text-nu20 uppercase">
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className="text-nu20 uppercase">
              <NavLink to={"/"}>Contact Us</NavLink>
            </li>
            <li className="text-nu20 uppercase">
              <NavLink to={"/"}>Dashboard</NavLink>
            </li>
            <li className="text-nu20 uppercase">
              <NavLink to={"/"}>Our Menu</NavLink>
            </li>
            <li className="text-nu20 uppercase">
              <NavLink to={"/"}>Our Shop</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
