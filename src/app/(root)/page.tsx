import ListProduct from "@/components/products/list-product/ListProduct";
import { IProduct } from "@/types/product.types";

const Page = async () => {

  return (
    <main>
      <section className="space-y-6">
        <h1 className="font-semibold text-[24px]">Каталог</h1>
        <ListProduct products={products} />
      </section>
    </main>
  );
};

export default Page;
