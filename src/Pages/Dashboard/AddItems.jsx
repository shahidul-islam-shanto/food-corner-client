import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const AddItems = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="">
            <div className="">
              <SectionTitle
                title={"---What's new?---"}
                subTitle={"ADD AN ITEM"}
              />
            </div>
            <div className="px-10 py-14 bg-nu30">
              <form>
                <div>
                  <label htmlFor="name" className="block mb-1 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    className="w-full px-3 py-2 mb-4 border border-nu60 placeholder:text-nu60 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
