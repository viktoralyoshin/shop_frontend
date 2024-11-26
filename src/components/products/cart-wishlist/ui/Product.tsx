import { Card, CardContent } from "@/components/ui/card";
import { IProduct } from "@/types/product.types";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { X } from "lucide-react";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Card className="flex items-center w-full">
      <div className="flex gap-4 justify-between items-center w-full p-4">
        <div className="flex gap-2 items-center">
          <Image src="/1.webp" alt="alt" width={50} height={50} />
          <h2 className="font-semibold">{product.name}</h2>
        </div>
        <div className="flex gap-2 items-center">
          <p>
            {new Intl.NumberFormat("ru", {
              style: "currency",
              currency: "RUB",
            }).format(product.price)}
          </p>
          <Button size="icon" variant="destructive"><X /></Button>
        </div>
      </div>
    </Card>
  );
};

export default Product;
