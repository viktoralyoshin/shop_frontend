"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useProduct } from "./use-product";
import { useParams } from "next/navigation";
import { useAuthStore } from "@/stores/use-auth-store";
import { bucketService } from "@/services/bucket.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { wishlistService } from "@/services/wishlist.service";

const Page = () => {
  const { id } = useParams();

  const data = useProduct(id);

  const isAuth = useAuthStore((state) => state.authenticated);

  const QueryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["addToCart"],
    mutationFn: (id: number) => bucketService.addProduct(id),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["getBucket"],
      });
      toast("Товар добавлен в корзину");
    },
  });

  const { mutate: addMutate } = useMutation({
    mutationKey: ["addWishlist"],
    mutationFn: (id: number) => wishlistService.addProduct(id),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["getWishlist"],
      });
      toast("Товар добавлен в избранное");
    },
  });

  const addProductToCart = (id: number) => {
    mutate(id);
  };

  const addProductToWishlist = (id: number) => {
    addMutate(id);
  };

  const pictureUrl = data?.pictureUrl ? data.pictureUrl : "/1.webp";

  return (
    <main className="flex flex-col space-y-20 justify-center">
      <div className="flex md:flex-row flex-col gap-4">
        <Image src={pictureUrl} alt="alt" width={300} height={300} />
        <div className="space-y-8">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h1 className="text-[24px] font-semibold">{data?.name}</h1>
              <Badge variant="outline">{data?.category.name}</Badge>
            </div>
            <p>
              {data?.price &&
                new Intl.NumberFormat("ru", {
                  style: "currency",
                  currency: "RUB",
                }).format(data?.price)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {isAuth && (
              <>
                <Button
                  onClick={() => data?.id && addProductToWishlist(data.id)}
                  size="icon"
                  variant="ghost"
                >
                  <Heart />
                </Button>
                <Button onClick={() => data?.id && addProductToCart(data.id)}>
                  <ShoppingCart /> В корзину
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[24px] font-semibold">Описание</h1>
        <p>{data?.description}</p>
      </div>
    </main>
  );
};

export default Page;
