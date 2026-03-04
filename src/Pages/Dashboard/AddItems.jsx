import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Select from "react-select";

const AddItems = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "mango", label: "Mango" },
  ];
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
                          <div className="w-88">
                            <Select
                              options={options}
                              value={selectedOption1}
                              onChange={setSelectedOption1}
                              placeholder="Select a fruit"
                            />
                          </div>
                        </div>
                        <div className="">
                          <label htmlFor="name" className="font-semibold">
                            Recipe name*
                          </label>
                          <div className="w-88" >
                            <Select
                              options={options}
                              value={selectedOption2}
                              onChange={setSelectedOption2}
                              placeholder="Select a fruit"
                            />
                          </div>
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
