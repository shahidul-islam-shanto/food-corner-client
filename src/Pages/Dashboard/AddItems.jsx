import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Select from "react-select";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const IMAGE_UPLOAD_KEY = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const IMAGE_HOSTING_API = `https://api.imgbb.com/1/upload?key=${IMAGE_UPLOAD_KEY}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const options = [
    { value: "Salad", label: "Salad" },
    { value: "Pizza", label: "Pizza" },
    { value: "Soup", label: "Soup" },
    { value: "Dessert", label: "Dessert" },
    { value: "Drink", label: "Drink" },
  ];

  const handleFormArea = (e) => {
    e.preventDefault();
    console.log("this is from");
    const from = e.target;
    const name = from.name.value;
    const category = from.category.value;
    const price = from.price.value;
    const file = from.file.value;

    const allFile = { name, category, price, file };

    console.log(allFile);
  };
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
                    <form onSubmit={handleFormArea}>
                      <div className="">
                        <label htmlFor="name" className="font-semibold">
                          Recipe name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Recipe name"
                          required
                          className="w-full px-3 py-3 mb-4 mt-2 placeholder:text-nu60 rounded-xl bg-nu10"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="">
                          <label htmlFor="name" className="font-semibold">
                            Category*
                          </label>
                          <div className="w-88 mt-2">
                            <Select
                              options={options}
                              name="category"
                              placeholder="Category"
                              required
                              className="w-full px-3 py-2 mb-4 mt-2 placeholder:text-nu60 rounded-xl bg-nu10"
                            />
                          </div>
                        </div>
                        <div className="">
                          <label htmlFor="name" className="font-semibold">
                            Price*
                          </label>
                          <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            required
                            className="w-full px-3 py-3 mb-4 mt-2 placeholder:text-nu60 rounded-xl bg-nu10"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="name" className="font-semibold">
                          Recipe Details*
                        </label>
                        <textarea
                          className="w-full px-3 py-4 mt-2 rounded-lg bg-nu10"
                          rows="6"
                          placeholder="Recipe Details"
                          required
                          name="text"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 font-medium">
                          Upload File
                        </label>
                        <input
                          type="file"
                          name="file"
                          required
                          className="bg-nu10  px-4 py-3"
                        />
                      </div>
                      <div className="">
                        <button className="px-4 py-3 bg-nu100 text-nu10 font-semibold rounded-lg">
                          Add Item
                        </button>
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
