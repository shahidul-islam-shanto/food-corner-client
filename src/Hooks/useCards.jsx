import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCards = () => {
  const axiosSecure = useAxiosSecure();
  //   user email use
  const { user } = useAuth();
  const { refetch, data: card = [] } = useQuery({
    queryKey: ["card", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cards?email=${user.email}`);
      return res.data;
    },
  });
  return [card];
};

export default useCards;
