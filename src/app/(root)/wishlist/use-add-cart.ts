import { wishlistService } from "@/services/wishlist.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddBucket = (id: number) => {
  const QueryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["addToBucketFromWishlist"],
    mutationFn: () => wishlistService.addProductToBucket(id),
    onSuccess: () => {
      toast("Товар добавлен в корзину");
      QueryClient.invalidateQueries({
        queryKey: ["getWishlist"],
      });
      QueryClient.invalidateQueries({
        queryKey: ["getBucket"],
      });
    },
  });

  return { mutate };
};
