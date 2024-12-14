"use client";

import { useWishlist } from "@/hooks/use-wishlist";
import Product from "./Product";

const ListWishlist = () => {
  const data = useWishlist();

  return (
    <div className="flex flex-col gap-2">
      {data?.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListWishlist;
