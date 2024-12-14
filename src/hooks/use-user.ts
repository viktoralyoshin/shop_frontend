import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useUser = (id: string) => {
  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => userService.getUser(id),
  });

  return data;
};
