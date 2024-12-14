"use client";

import ProductCard from "@/components/dashboard/ProductCard";
import { useProducts } from "@/hooks/use-products";

const ListProducts = () => {
  const data = useProducts();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListProducts;
