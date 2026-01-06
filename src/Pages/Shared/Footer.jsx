import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-nu60 text-nu10 ">
        <div className="">
          <div className="grid grid-cols-12 justify-center items-center">
            <div className="col-span-6">
              <div className="flex justify-center items-center bg-nu80 h-100">
                <div className="">
                  <h3 className="text-center mb-6">CONTACT US</h3>
                  <span className="text-center text-nu10 font-medium mb-2">
                    123 ABS Street, Uni 21, Bangladesh
                  </span>
                  <span className="text-center text-nu10 font-medium mb-2">
                    +88 123456789
                  </span>
                  <span className="text-center text-nu10 font-medium mb-2">
                    Mon - Fri: 08:00 - 22:00
                  </span>
                  <span className="text-center text-nu10 font-medium mb-2">
                    Sat - Sun: 10:00 - 23:00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="flex justify-center items-center bg-nu90 h-100 ">
                <div className="">
                  <h3 className="text-nu10 font-bold text-center lg:mb-6 mb-3">
                    Follow US
                  </h3>
                  <p className="text-nu10 font-medium lg:mb-6 mb-3">
                    Join us on social media
                  </p>
                  <div className="flex justify-center items-center gap-6">
                    <Link to={""}>
                      <FaFacebookF className="text-[32px] font-bold" />
                    </Link>
                    <Link to={""}>
                      <FaInstagram className="text-[32px] font-bold" />
                    </Link>
                    <Link to={""}>
                      <FaTwitter className="text-[32px] font-bold" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-nu60 py-6">
        <div className="container-2">
          <div className="">
            <p className="text-nu10 flex justify-center items-center gap-1">
              Copyright © {new Date().getFullYear()} - All right reserved by
              <Link
                to={""}
                className="hover:text-nu102 font-semibold hover:underline duration-300 "
              >
                Food Corner
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
