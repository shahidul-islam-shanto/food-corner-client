import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";

const AdminUpdateItems = () => {
  const itemsMenu = useLoaderData();
  console.log(itemsMenu);

  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <SectionTitle
              title={"---Update Items!---"}
              subTitle={"Update Info Items"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateItems;
