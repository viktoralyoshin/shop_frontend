import { IProduct } from "@/types/product.types";
import Product from "./ui/Product";

const CartList = ({products}:{products:IProduct[]}) => {

  return (
    <div className="flex flex-col items-center gap-2 mx-4">
      {products.map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default CartList;
