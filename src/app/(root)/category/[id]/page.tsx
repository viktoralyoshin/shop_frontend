import ListProduct from "@/components/products/list-product/ListProduct";
import { categoryService } from "@/services/category.service";
import { productService } from "@/services/product.service";

const Page = async ({ params }: any) => {
  const { id } = await params;

  const category = await categoryService.getCategoryById(id)

  const products = await productService.getProductsByCategory(id)

  return (
    <main className="space-y-4">
      <h1 className="font-semibold text-[24px]">{category.name}</h1>
      <ListProduct products={products} />
    </main>
  );
};

export default Page;
