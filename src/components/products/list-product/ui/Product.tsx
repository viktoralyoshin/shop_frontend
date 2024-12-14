'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bucketService } from "@/services/bucket.service";
import { useAuthStore } from "@/stores/use-auth-store";
import { IProduct } from "@/types/product.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const Product = ({ product }: { product: IProduct }) => {
  const isAuth = useAuthStore((state) => state.authenticated);

  const QueryClient = useQueryClient() 

  const { mutate } = useMutation({
    mutationKey: ["addToCart"],
    mutationFn: () => bucketService.addProduct(product.id),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ['getBucket']
      })
      toast("Товар добавлен в корзину");
    },
  });

  const addProductToCart = () => {
    mutate();
  };

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <Link
            href={`/product/${product.id}`}
            className="hover:text-foreground/70"
          >
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription>{product.category.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Image src={product.pictureUrl} alt="alt" width={200} height={300} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p>
          {new Intl.NumberFormat("ru", {
            style: "currency",
            currency: "RUB",
          }).format(product.price)}
        </p>
        {isAuth && (
          <Button onClick={addProductToCart}>
            <ShoppingCart /> В корзину
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Product;
