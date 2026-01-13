import React from "react";

const OurShopTabs = ({ salad, pizza, soup, dessert, drinks }) => {
  return (
    <div>
      <div className="tabs tabs-border  border-0 flex justify-center items-center">
        {/* card 1 */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-nu60 font-medium text-[24px] duration-500"
          aria-label="Salad"
        />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {salad.map((item) => (
              <div key={item._id} className="col-span-4">
                <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
                  <div className="relative">
                    <img className="mb-6 rounded-md" src={item.image} alt="" />
                    <div className=" absolute top-2 right-2">
                      <p className="text-nu10 px-3 py-1 bg-nu80 font-medium rounded-md inline-block">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h4 className="text-nu60 font-semibold mb-2">
                      {item.name}
                    </h4>
                    <p className="text-nu60 font-normal h-full">
                      {item.recipe}
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* card 2 */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-nu60 font-medium text-[24px] duration-500"
          aria-label="Pizza"
          defaultChecked
        />
        <div className="tab-content border-0  px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {pizza.map((item) => (
              <div key={item._id} className="col-span-4">
                <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
                  <div className="relative">
                    <img className="mb-6 rounded-md" src={item.image} alt="" />
                    <div className=" absolute top-2 right-2">
                      <p className="text-nu10 px-3 py-1 bg-nu80 font-medium rounded-md inline-block">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h4 className="text-nu60 font-semibold mb-2">
                      {item.name}
                    </h4>
                    <p className="text-nu60 font-normal h-full">
                      {item.recipe}
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* card 3 */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-nu60 font-medium text-[24px] duration-500"
          aria-label="Soups"
        />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {soup.map((item) => (
              <div key={item._id} className="col-span-4">
                <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
                  <div className="relative">
                    <img className="mb-6 rounded-md" src={item.image} alt="" />
                    <div className=" absolute top-2 right-2">
                      <p className="text-nu10 px-3 py-1 bg-nu80 font-medium rounded-md inline-block">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h4 className="text-nu60 font-semibold mb-2">
                      {item.name}
                    </h4>
                    <p className="text-nu60 font-normal h-full">
                      {item.recipe}
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* card 4 */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-nu60 font-medium text-[24px] duration-500"
          aria-label="Desserts"
        />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {dessert.map((item) => (
              <div key={item._id} className="col-span-4">
                <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
                  <div className="relative">
                    <img className="mb-6 rounded-md" src={item.image} alt="" />
                    <div className=" absolute top-2 right-2">
                      <p className="text-nu10 px-3 py-1 bg-nu80 font-medium rounded-md inline-block">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h4 className="text-nu60 font-semibold mb-2">
                      {item.name}
                    </h4>
                    <p className="text-nu60 font-normal h-full">
                      {item.recipe}
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* card 5 */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-nu60 font-medium text-[24px] duration-500 "
          aria-label="Drinks"
        />
        <div className="tab-content border-0 px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            {drinks.map((item) => (
              <div key={item._id} className="col-span-4">
                <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
                  <div className="relative">
                    <img className="mb-6 rounded-md" src={item.image} alt="" />
                    <div className=" absolute top-2 right-2">
                      <p className="text-nu10 px-3 py-1 bg-nu80 font-medium rounded-md inline-block">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h4 className="text-nu60 font-semibold mb-2">
                      {item.name}
                    </h4>
                    <p className="text-nu60 font-normal h-full">
                      {item.recipe}
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShopTabs;
