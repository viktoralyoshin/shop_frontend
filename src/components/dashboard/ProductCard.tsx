import { IProduct } from "@/types/product.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }: { product: IProduct }) => {
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
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
