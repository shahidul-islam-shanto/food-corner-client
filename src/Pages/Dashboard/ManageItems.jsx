import React from "react";
import useCards from "../../Hooks/useCards";

const ManageItems = () => {
  const [cart] = useCards();
  return (
    <div>
      <div className="">
        <h1>Manage Items: {cart.length}</h1>
      </div>
    </div>
  );
};

export default ManageItems;
