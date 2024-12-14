'use client'

import ListProduct from "@/components/products/list-product/ListProduct";
import { useProducts } from "@/hooks/use-products";

const Page = () => {
  const products = useProducts();

  return (
    <main>
      <section className="space-y-6">
        <h1 className="font-semibold text-[24px]">Каталог</h1>
        {products && <ListProduct products={products} />}
      </section>
    </main>
  );
};

export default Page;
