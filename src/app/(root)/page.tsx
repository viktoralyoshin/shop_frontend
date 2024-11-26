import ListProduct from "@/components/products/list-product/ListProduct";
import { IProduct } from "@/types/product.types";

const Page = async () => {
  const data = await fetch("http://localhost:5000/api/product");

  const products: IProduct[] = await data.json();

  return (
    <>
      <section className="space-y-6">
        <h1 className="font-semibold text-[24px]">Каталог</h1>
        <ListProduct products={products} />
      </section>
    </>
  );
};

export default Page;
