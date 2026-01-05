import { useContext, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";


const NavBer = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);
 

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Search value:", e.target.value);
      setShowSearch(false);
      e.target.value = "";
    }
  };

  

  const NavBer = (
    <>
      <li className="text-nu20">
        <NavLink to={"/"}>HOME</NavLink>
      </li>

      <li className="relative group cursor-pointer">
        <div className="flex items-center gap-1 text-nu20 group">
          <span className="cursor-pointer">JAVASCRIPT</span>
          <IoIosArrowForward className="transition-transform duration-300 text-[18px] group-hover:rotate-90" />
        </div>
        <div className="absolute left-0 top-full h-8 w-full"></div>
        <ul className="absolute left-0 top-[calc(100%+1.8rem)] hidden group-hover:block rounded shadow w-52 bg-nu10">
          <li className="px-4 py-2 text-nu20">Dynamic Clock</li>
          <li className="px-4 py-2 text-nu20">Form Validation</li>
          <li className="px-4 py-2 text-nu20">Card Slider</li>
        </ul>
      </li>

      <li className="text-nu20">
        <NavLink to={"/about"}>ABOUT US</NavLink>
      </li>
      {/* <li className="text-nu20">
        {user?.email ? <NavLink to={"/myCourse"}>My Course</NavLink> : ""}
      </li> */}
    </>
  );

  return (
    <nav className="sticky top-0 left-0 w-full bg-nu80 z-50 py-5 shadow-md">
      <div className="container-2">
        <div className="flex justify-between items-center">
          <button className="lg:hidden text-nu20" onClick={() => setOpen(true)}>
            <IoMenu className="text-[24px]" />
          </button>
          <div className="text-nu20 text-2xl font-semibold">
            <h3>GroupStudy</h3>
          </div>
          <ul className="hidden lg:flex items-center gap-6 text-nu20  font-medium">
            {NavBer}
          </ul>

          <div className="flex justify-between items-center gap-4">
            <div className="relative">
              <button
                onClick={() => {
                  setShowSearch(true);
                  setTimeout(() => inputRef.current?.focus(), 100);
                }}
                className="text-nu20"
              >
                <IoSearch className="text-[24px]" />
              </button>

              {showSearch && (
                <div className="absolute right-0 mt-4 bg-nu60 p-3 rounded shadow">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="w-100 px-3 py-2 rounded outline-none"
                    onKeyDown={handleSearch}
                    onBlur={() => setShowSearch(false)}
                  />
                </div>
              )}
            </div>
            {/* <div className="">
              {user?.email ? (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 bg-primary1 rounded-lg"
                  >
                    Sing Out
                  </button>
                </li>
              ) : (
                <Link to={"/login"}>
                  <button className="px-4 py-2 bg-primary1 rounded-lg">
                    Login
                  </button>
                </Link>
              )}
            </div> */}
            <div className="">
              <Link to={"/register"}>
                <button className="px-4 py-2 bg-primary1 rounded-lg">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <MobileMenu open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default NavBer;
