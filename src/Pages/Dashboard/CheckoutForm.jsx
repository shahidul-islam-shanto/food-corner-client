import { CardElement } from "@stripe/react-stripe-js";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCards from "../../Hooks/useCards";
import useAuth from "../../Hooks/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCards();
  const [user] = useAuth();

  const totalPrice = cart.reduce((total, items) => {
    return total + items.price;
  }, 0);
  console.log(totalPrice);

  useEffect(() => {
    if (!totalPrice || totalPrice <= 0) return;
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setError("");
    }

    // confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unauthenticated",
            name: user?.displayName || "anonymous",
          },
        },
      });
  };
  return (
    <div className="">
      <div className="container-2">
        <form onClick={handleSubmit} className="">
          <div className="bg-nu20 px-4 py-4 rounded-md">
            <div className="bg-nu10 px-4 py-4 rounded-xl">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="px-8 py-2 bg-nu70 text-nu10 rounded-xl mt-4 block w-full"
          >
            Pay
          </button>
          <p className="text-red-500">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
