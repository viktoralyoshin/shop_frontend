import { Card } from "@/components/ui/card";
import { IProduct } from "@/types/product.types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { bucketService } from "@/services/bucket.service";
import Link from "next/link";

const Product = ({ product }: { product: IProduct }) => {
  const QueryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["deleteFromCart"],
    mutationFn: () => bucketService.deleteProduct(product.id),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["getBucket"],
      });
    },
  });

  const deleteProductFromCart = () => {
    mutate();
  };

  return (
    <Card className="flex items-center w-full">
      <div className="flex gap-4 justify-between items-center w-full p-4">
        <div className="flex gap-2 items-center">
          <Image src={product.pictureUrl} alt="alt" width={50} height={50} />
          <Link href={`/product/${[product.id]}`} className="font-semibold">
            {product.name}
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <p>
            {new Intl.NumberFormat("ru", {
              style: "currency",
              currency: "RUB",
            }).format(product.price)}
          </p>
          <Button
            onClick={deleteProductFromCart}
            size="icon"
            variant="destructive"
          >
            <X />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Product;
