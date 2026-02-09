import React from "react";
import useCards from "../../Hooks/useCards";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageItems = () => {
  const [cart] = useCards();
  const totalPrice = cart.reduce((total, items) => {
    return total + items.price;
  }, 0);
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center px-6 mb-12">
          <h2>Manage Items: {cart.length}</h2>
          <h2>Total Price: ${totalPrice}</h2>
          <button className="px-6 py-2 bg-nu70 font-semibold rounded-lg text-nu10">
            Pay
          </button>
        </div>
        <div className="px-10">
          <div className="">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-nu60">Item Image</th>
                  <th className="text-nu60">Item Name</th>
                  <th className="text-nu60">Price</th>
                  <th className="text-nu60">Action</th>
                  <th className="text-nu60">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((items) => (
                  <tr>
                    <td>
                      <img
                        className="w-14 h-14 rounded-full"
                        src={items.image}
                        alt=""
                      />
                    </td>
                    <td>
                      <h5>{items.name}</h5>
                    </td>
                    <td>${items.price}</td>
                    <th>
                      <button className="px-3 py-3 bg-nu101 text-nu10 rounded-lg">
                        <MdEditSquare className="text-[24px]" />
                      </button>
                    </th>
                    <th>
                      <button className="px-3 py-3 bg-nu109 text-nu10 rounded-lg">
                        <RiDeleteBin6Line className="text-[24px]" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
