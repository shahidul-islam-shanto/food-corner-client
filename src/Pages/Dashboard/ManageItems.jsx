import React from "react";
import useCards from "../../Hooks/useCards";

const ManageItems = () => {
  const [cart] = useCards();
  const totalPrice = cart.reduce((total, items) => {
    return total + items.price;
  }, 0);
  return (
    <div>
      <div className="">
        <h2>Manage Items: {cart.length}</h2>
        <h2>Total Price: {totalPrice}</h2>
      </div>
    </div>
  );
};

export default ManageItems;
