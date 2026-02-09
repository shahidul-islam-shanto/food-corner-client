import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCards from "../../Hooks/useCards";

const OurShopCard = ({ items }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCards();

  const handleAddToCart = (food) => {
    const { _id, name, image, price } = food;

    if (user && user.email) {
      //  user created
      const cardItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/cards", cardItem)
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            title: "Successfully Card Add!",
            text: "Your file has been Add.",
            icon: "success",
          });
          // refetch card to update the items counts
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Log In?",
        text: "Please login to add to the card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
        }
      });
    }
  };

  return (
    <div key={items._id} className="col-span-4">
      <div className="bg-nu20 px-4 py-4 rounded-md w-full h-full">
        <div className="relative">
          <img className="w-full mb-6 rounded-md" src={items.image} alt="" />
          <div className=" absolute top-2 right-2">
            <p className="text-nu10 px-3 py-1 bg-nu80 font-medium rounded-md inline-block">
              ${items.price}
            </p>
          </div>
        </div>
        <div className="text-center mb-6">
          <h4 className="text-nu60 font-semibold mb-2">{items.name}</h4>
          <p className="text-nu60 font-normal h-full">{items.recipe}</p>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleAddToCart(items)}
            className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurShopCard;
