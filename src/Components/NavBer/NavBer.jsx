import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../../assets/images/hero-img/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import useCards from "../../Hooks/useCards";

const NavBer = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [card] = useCards();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const NavBer = (
    <>
      <li className="text-nu20 uppercase">
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li className="text-nu20 uppercase">
        <NavLink to={"/"}>Contact Us</NavLink>
      </li>
      <li className="text-nu20 uppercase">
        <NavLink to={"/createBoard"}>Dashboard</NavLink>
      </li>
      <li className="text-nu20 uppercase">
        <NavLink to={"/ourMenu"}>Our Menu</NavLink>
      </li>
      <li className="text-nu20 uppercase">
        <NavLink to={"/ourShop/salad"}>Our Shop</NavLink>
      </li>
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
            <Link to={""}>
              <div className="flex justify-center items-center gap-2">
                <img
                  className="w-10 h-10 border-2 border-nu102 rounded-full"
                  src={Logo}
                  alt=""
                />

                <div className="flex items-center">
                  <span className="lg:text-[32px] md:text-[28px] text-[24px] font-bold font-cinzel">
                    Food
                  </span>
                  <span className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-nu102 font-cinzel">
                    Corner
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <ul className="hidden lg:flex items-center gap-6 text-nu20  font-medium">
            {NavBer}
          </ul>

          <div className="flex justify-between items-center gap-6">
            <div className="">
              <Link to={"/dashboard/userHome"}>
                <button className="btn">
                  <FaCartShopping className="text-nu10 font-bold text-[32px]" />
                  <div className="badge badge-sm badge-secondary">
                    {card.length}
                  </div>
                </button>
              </Link>
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <div className="">
                  {user?.email ? (
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="px-4 py-2 text-nu10 rounded-lg"
                      >
                        Sing Out
                      </button>
                    </li>
                  ) : (
                    <Link to={"/login"}>
                      <button className="px-4 py-2  text-nu10 rounded-lg">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
                <div className="">
                  {user?.email ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <span>
                      <FaRegUserCircle className="text-nu10 text-[32px] font-bold" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default NavBer;
