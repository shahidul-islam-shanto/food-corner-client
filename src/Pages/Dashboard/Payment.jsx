import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("");
const Payment = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <SectionTitle title={"Payment"} subTitle={"Please pay to eat"} />
        </div>
        <div className="">
          <Elements stripe={stripePromise}></Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
