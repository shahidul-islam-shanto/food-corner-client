import { CardElement } from "@stripe/react-stripe-js";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCards from "../../Hooks/useCards";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCards();
  const { user } = useAuth();
  const navigate = useNavigate()

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

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id:", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment information to the server
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(), //utc date convert / use moment js
          cardIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          status: "service pending",
          transactionId: paymentIntent.id,
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("save this payment:", res);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for your payment",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory")
        }
      }
    }
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
          {transactionId && (
            <p className="text-green-500">
              Transaction complete with id: {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
