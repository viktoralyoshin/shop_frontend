import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { data } = useQuery({
    queryKey: ["getProfile"],
    queryFn: () => userService.getProfile(),
  });

  return data;
};
