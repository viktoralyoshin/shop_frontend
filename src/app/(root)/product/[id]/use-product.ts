import { productService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (id: string | string[] | undefined) => {
  if (id != undefined) {
    const { data } = useQuery({
      queryKey: ["getProductById"],
      queryFn: () => productService.getProductById(parseInt(id.toString())),
    });

    return data;
  }
};
