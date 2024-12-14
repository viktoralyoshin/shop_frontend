import { orderService } from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";

export const useOrder = (id: string | string[] | undefined) => {
  if (id != undefined) {
    const { data } = useQuery({
      queryKey: ["getOrder"],
      queryFn: () => orderService.getOrder(id.toString()),
    });

    return data;
  }
};
