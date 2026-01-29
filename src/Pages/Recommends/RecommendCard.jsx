import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const RecommendCard = ({ recommendCord }) => {
  const { image, name, recipe } = recommendCord;
  const { user } = useAuth();

  const handleAddToCart = (food) => {
    // console.log(food, user.email);
    if (user && user.email) {
      // todo: user created
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
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <div className="bg-nu20 px-6 py-6 rounded-md w-full h-full">
      <img className=" mb-6 rounded-md" src={image} alt="" />
      <div className="text-center mb-6">
        <h4 className="text-nu60 font-semibold mb-2">{name}</h4>
        <p className="text-nu60 font-normal h-full">{recipe}</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleAddToCart(recommendCord)}
          className="px-6 py-3 border-b-2 border-nu102 hover:border-nu60 font-medium bg-nu30 hover:bg-nu60 text-nu102 duration-300 uppercase rounded-lg"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default RecommendCard;
