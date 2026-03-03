import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const AddItems = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="px-20">
            <div className="">
              <SectionTitle
                title={"---What's new?---"}
                subTitle={"ADD AN ITEM"}
              />
            </div>
            <div className="">
              <div className="grid grid-cols-12">
                <div className="col-span-2"></div>
                <div className="col-span-8">
                  <div className="px-10 py-10 bg-nu20">
                    <form>
                      <div className="">
                        <label htmlFor="name" className="font-semibold">
                          Recipe name*
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Recipe name"
                          className="w-full px-3 py-3 mb-4 mt-2  placeholder:text-nu60 rounded-xl bg-nu10   outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="">
                          <label htmlFor="name" className="font-semibold">
                            Recipe name*
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Recipe name"
                            className="w-full px-3 py-3 mb-4 mt-2  placeholder:text-nu60 rounded-xl bg-nu10   outline-none"
                          />
                        </div>
                         <div className="">
                          <label htmlFor="name" className="font-semibold">
                            Recipe name*
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Recipe name"
                            className="w-full px-3 py-3 mb-4 mt-2  placeholder:text-nu60 rounded-xl bg-nu10   outline-none"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
