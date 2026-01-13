import React from "react";

const OurShopInput = ({ inputsCard }) => {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_2"
        className="tab text-nu60 font-medium text-[24px] duration-500"
        aria-label={inputsCard}
        defaultChecked
      />
    </>
  );
};

export default OurShopInput;
