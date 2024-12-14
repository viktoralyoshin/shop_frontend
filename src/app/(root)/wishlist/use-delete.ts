import { wishlistService } from "@/services/wishlist.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBucket = (id: number) => {
  const QueryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["addToBucketFromWishlist"],
    mutationFn: () => wishlistService.deleteProduct(id),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["getWishlist"],
      });
    },
  });

  return { mutate };
};