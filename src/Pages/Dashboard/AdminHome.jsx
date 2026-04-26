import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  const { data: orderData } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  return (
    <div>
      <div className="container-2">
        <h2 className="block mb-16">
          Hi Welcome
          {user?.displayName ? user.displayName : " Back?"}
        </h2>
        <div className="w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">Revenue</h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                ${stats?.revenue}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                Jan 1st - Feb 1st
              </div>
            </div>
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">
                Customers
              </h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                {stats?.users}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                ↗︎ 400 (22%)
              </div>
            </div>
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">
                Products
              </h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                {stats?.menuItems}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                ↘︎ 90 (14%)
              </div>
            </div>
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">Orders</h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                {stats?.orders}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                ↘︎ 90 (14%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
