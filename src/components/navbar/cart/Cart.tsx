import CartMedia from "./CartMedia";
import { IProduct } from "@/types/product.types";

const Cart = async () => {
  return <CartMedia products={products} />;
};

export default Cart;
