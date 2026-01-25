import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth";
import LoginFrom from "../../assets/images/authentication/authentication1.png";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { singInEmailPassword } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    singInEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Successfully Log In!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_Captcha_value = e.target.value;

    if (validateCaptcha(user_Captcha_value)) {
      setDisabled(false);
      Swal.fire({
        title: "Successfully Captcha!",
        icon: "success",
        draggable: true,
      });
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <div className="bg-nu10 py-20">
        <div className="container-2">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-6">
              <div className="">
                <img className="w-full" src={LoginFrom} alt="" />
              </div>
            </div>
            <div className="col-span-6">
              <div className=" flex items-center justify-center">
                <div className="border-2 border-nu60 rounded-2xl px-10 py-10 w-full max-w-2xl space-y-4">
                  <form onSubmit={handleLogin} className="">
                    <h1 className="text-xl mb-6 font-bold text-center">
                      Login your account
                    </h1>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        className="w-full px-3 py-2 mb-4 border border-nu60 placeholder:text-nu60 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 font-semibold"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        className="w-full px-3 py-2 mb-4 border border-nu60 placeholder:text-nu60 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>

                    {/* Reload Captcha */}

                    <div className="mb-6">
                      <label htmlFor="" className=" py-2 inline-block">
                        <LoadCanvasTemplate className="bg-nu30" />
                      </label>
                      <input
                        type="text"
                        name="captcha"
                        onBlur={handleValidateCaptcha}
                        placeholder="Enter your captcha..."
                        className="w-full px-3 py-2 mb-3 border border-nu60 placeholder:text-nu60 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={disabled}
                      className="w-full text-nu60 py-2 rounded-xl bg-nu107 hover:bg-nu101 duration-500 cursor-pointer font-bold"
                    >
                      Login
                    </button>
                  </form>
                  <div className="">
                    <div className="text-center mb-4">
                      <p className="mb-3">Or Sign In with</p>
                      <div className="flex justify-center items-center gap-4">
                        <span className="px-3 py-3 bg-nu20 rounded-full cursor-pointer">
                          <FaFacebookF />
                        </span>
                        <span className="px-3 py-3 bg-nu20 rounded-full cursor-pointer">
                          <FaLinkedinIn />
                        </span>
                        <span className="px-3 py-3 bg-nu20 rounded-full cursor-pointer">
                          <FaGoogle />
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p>
                        Have an account?
                        <Link
                          className="text-primary1 font-semibold ml-2"
                          to={"/register"}
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
