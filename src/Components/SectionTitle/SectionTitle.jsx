import React from "react";

const SectionTitle = ({title, subTitle}) => {
  return (
    <div>
      <div className="text-center mb-14">
        <h4 className="text-primary1 font-cinzel mb-3">{title}</h4>
        <h2 className="text-primary1 font-semibold py-3 border-y-2 inline-block border-nu102">{subTitle}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
