import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

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
            <li>HOME</li>
            <li>
              <div
                className="flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => setJsOpen(!jsOpen)}
              >
                <span>JAVASCRIPT</span>
                <IoIosArrowForward
                  className={`transition-transform duration-300 ${
                    jsOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>

              {jsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>Dynamic Clock</li>
                  <li>Form Validation</li>
                  <li>Card Slider</li>
                </ul>
              )}
            </li>

            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
