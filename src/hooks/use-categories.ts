import { categoryService } from "@/services/category.service";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  const { data } = useQuery({
    queryKey: ["getCategory"],
    queryFn: () => categoryService.getCategories(),
  });

  return data;
};
