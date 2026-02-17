import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div className="">
      <div className="">
        <div className="">
          <h4>Total User: {users.length}</h4>

          <div className="">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-nu60 text-[20px]">NAME</th>
                    <th className="text-nu60 text-[20px]">EMAIL</th>
                    <th className="text-nu60 text-[20px]">ROLE</th>
                    <th className="text-nu60 text-[20px]">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {users.map((items) => (
                    <tr>
                      <th>
                        <div className="">
                          <h5>{items.displayName}</h5>
                        </div>
                      </th>
                      <td>
                        <div>
                          <h4 className="font-bold">{items.email}</h4>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>Purple</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
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
    </div>
  );
};

export default AllUsers;
