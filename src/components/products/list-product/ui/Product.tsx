
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProduct } from "@/types/product.types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Product = ({ product }: { product: IProduct }) => {

  return (
    <Card>
      <CardHeader>
        <CardTitle><Link href={`/product/${product.id}`} className="hover:text-foreground/70">{product.name}</Link></CardTitle>
        <CardDescription>{product.category.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Image src="/1.webp" alt="alt" width={200} height={300} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p>
          {new Intl.NumberFormat("ru", {
            style: "currency",
            currency: "RUB",
          }).format(product.price)}
        </p>
        <Button>
          <ShoppingCart /> В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
