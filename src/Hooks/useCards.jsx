import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCards = () => {
  const axiosSecure = useAxiosSecure();
  const { data: card = [] } = useQuery({
    queryKey: ["card"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cards");
      return res.data;
    },
  });
  return [card];
};

export default useCards;
