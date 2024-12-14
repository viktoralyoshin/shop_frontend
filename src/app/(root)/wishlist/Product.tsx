import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IProduct } from "@/types/product.types";
import { ShoppingCartIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAddBucket } from "./use-add-cart";
import { useDeleteBucket } from "./use-delete";

const Product = ({ product }: { product: IProduct }) => {
  const { mutate: addMutate } = useAddBucket(product.id);
  const { mutate: deleteMutate } = useDeleteBucket(product.id);

  function addToCart() {
    addMutate();
  }

  function deleteProductFromWishlist() {
    deleteMutate()
  }

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
            onClick={deleteProductFromWishlist}
            size="icon"
            variant="destructive"
          >
            <X />
          </Button>
          <Button onClick={addToCart} size="icon">
            <ShoppingCartIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Product;
