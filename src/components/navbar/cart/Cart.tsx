import CartMedia from "./CartMedia";
import { IProduct } from "@/types/product.types";

const Cart = async () => {
  const data = await fetch("http://localhost:5000/api/product");

  const products: IProduct[] = await data.json();

  return <CartMedia products={products} />;
};

export default Cart;
