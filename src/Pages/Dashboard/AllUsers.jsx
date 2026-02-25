import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { HiUserGroup } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      console.log(localStorage.getItem("access-token"));
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    //   user update
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${user.name} is an Admin Now`,
          icon: "success",
          draggable: true,
        });
      }
    });
  };
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
                    <th></th>
                    <th className="text-nu60 text-[20px]">NAME</th>
                    <th className="text-nu60 text-[20px]">EMAIL</th>
                    <th className="text-nu60 text-[20px]">ROLE</th>
                    <th className="text-nu60 text-[20px]">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {users.map((items, index) => (
                    <tr key={index}>
                      <th>
                        <p>{index + 1}</p>
                      </th>
                      <th>
                        <div className="">
                          <h5>{items.name}</h5>
                        </div>
                      </th>
                      <td>
                        <h6 className="font-bold">{items.email}</h6>
                      </td>
                      <td>
                        {items.role === "admin" ? (
                          "Admin"
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(items)}
                            className="px-3 py-3 bg-nu102 rounded-lg "
                          >
                            <HiUserGroup className="text-nu10 text-[20px]" />
                          </button>
                        )}
                      </td>

                      <th>
                        <button
                          onClick={() => handleDelete(items._id)}
                          className="px-3 py-3 bg-nu109 rounded-lg"
                        >
                          <MdDelete className="text-nu10 text-[20px]" />
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
