import { wishlistService } from "@/services/wishlist.service";
import { useQuery } from "@tanstack/react-query";

export const useWishlist = () => {
  const { data } = useQuery({
    queryKey: ["getWishlist"],
    queryFn: () => wishlistService.getWishlistById(),
  });

  return data;
};
