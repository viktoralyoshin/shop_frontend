import { productService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const { data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => productService.getProducts(),
  });

  return data;
};
