import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";
import LoginFrom from "../../assets/images/authentication/authentication1.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, googleSinIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.url.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        return updateUserProfile(name, photoURL);
      })
      .then(() => {
        const userInfo = {
          name: name,
          email: email,
        };
        // user data base a post
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user add a data base");
            Swal.fire({
              title: "Successfully Sign Up!",
              icon: "success",
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  const handleGoogleSingIn = () => {
    googleSinIn().then((result) => {
      console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      <div className="bg-nu10 py-20">
        <div className="container-2">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-6">
              <div className=" flex items-center justify-center">
                <div className="border-2 border-nu60 rounded-2xl px-10 py-10 w-full max-w-2xl space-y-4">
                  <form onSubmit={handleRegister} className="">
                    <h1 className="text-xl font-bold mb-6 text-center">
                      Register your account
                    </h1>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name..."
                        className="w-full px-3 py-2 mb-4 border border-nu60 placeholder:text-nu60 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-semibold"
                      >
                        Photo Url
                      </label>
                      <input
                        type="text"
                        name="url"
                        placeholder="Enter your PhotoUrl..."
                        className="w-full px-3 py-2 mb-4 border border-nu60 placeholder:text-nu60 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
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
                        className="w-full px-3 py-2 border mb-4 border-nu60 placeholder:text-nu60 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full text-nu10 py-2 rounded-xl bg-primary1 duration-500 cursor-pointer font-bold"
                    >
                      Register
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
                        <button onClick={handleGoogleSingIn}>
                          <span className="px-3 py-3 bg-nu20 rounded-full cursor-pointer">
                            <FaGoogle />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <p>
                        Have an account?
                        <Link
                          className="text-primary1 font-semibold pl-2"
                          to={"/login"}
                        >
                          Log In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="">
                <img className="w-full" src={LoginFrom} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
