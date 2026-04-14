import React from "react";
import useAuth from "../../Hooks/useAuth";

const UserHome1 = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="">
        <h2 className="block">
          Hi Welcome
          {user?.displayName ? user.displayName : " Back?"}
        </h2>
      </div>
    </div>
  );
};

export default UserHome1;
