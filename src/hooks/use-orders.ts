import { orderService } from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";

export const useOrders = () => {
  const { data } = useQuery({
    queryKey: ["getOrders"],
    queryFn: () => orderService.getOrders(),
  });

  return data;
};
