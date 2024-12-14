import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  const { data } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => userService.getUsers(),
  });

  return data;
};
