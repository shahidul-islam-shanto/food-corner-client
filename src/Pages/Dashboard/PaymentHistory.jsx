import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  return (
    <div>
      <div className="container-2">
        <h1>Total Payments: {payments.length}</h1>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="text-nu60 bg-nu102 text-[20px]">
                  <th>#</th>
                  <th>Price</th>
                  <th>Transaction Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>${item.price}</td>
                    <td>{item.transactionId}</td>
                    <td>{item.status}</td>
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

export default PaymentHistory;
