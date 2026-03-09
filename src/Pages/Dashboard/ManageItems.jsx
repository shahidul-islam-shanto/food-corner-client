import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageItems = () => {
  const [menuItems] = useMenu();
  return (
    <div>
      <div className="">
        <div className="">
          <SectionTitle
            title={"---Hurry Up!---"}
            subTitle={"MANAGE ALL ITEMS"}
          />
        </div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-nu60 text-[20px]">Item Image</th>
                  <th className="text-nu60 text-[20px]">Item Name</th>
                  <th className="text-nu60 text-[20px]">Price</th>
                  <th className="text-nu60 text-[20px]">Action</th>
                  <th className="text-nu60 text-[20px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {menuItems.map((items) => (
                  <tr>
                    <td>
                      <img
                        className="w-14 h-14 rounded-full"
                        src={items.image}
                        alt=""
                      />
                    </td>
                    <td>
                      <h6>{items.name}</h6>
                    </td>
                    <td>${items.price}</td>
                    <th>
                      <button className="px-3 py-3 bg-nu101 text-nu10 rounded-lg">
                        <MdEditSquare className="text-[24px]" />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(items._id)}
                        className="px-3 py-3 bg-nu109 text-nu10 rounded-lg"
                      >
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
