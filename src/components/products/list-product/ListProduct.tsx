import { IProduct } from "@/types/product.types";
import Product from "./ui/Product";

const ListProduct = async ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
      {products.map((product: IProduct) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListProduct;
