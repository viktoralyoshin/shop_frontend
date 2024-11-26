import { IProduct } from "@/types/product.types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Page = async ({ params }: any) => {
  const { id } = await params;

  const data = await fetch(`http://localhost:5000/api/product/${id}`);

  const product: IProduct = await data.json();

  return (
    <div className="flex flex-col space-y-20 justify-center">
      <div className="flex md:flex-row flex-col gap-4">
        <Image src="/1.webp" alt="alt" width={300} height={300} />
        <div className="space-y-8">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h1 className="text-[24px] font-semibold">{product.name}</h1>
              <Badge variant="outline">{product.category.name}</Badge>
            </div>
            <p>
              {new Intl.NumberFormat("ru", {
                style: "currency",
                currency: "RUB",
              }).format(product.price)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <Heart />
            </Button>
            <Button>
              <ShoppingCart /> В корзину
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[24px] font-semibold">Описание</h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Page;
