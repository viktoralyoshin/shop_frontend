import ListProduct from "@/components/products/list-product/ListProduct";

const Page = async ({ params }: any) => {
  const { id } = await params;

  return (
    <main className="space-y-4">
      <h1 className="font-semibold text-[24px]">{category.name}</h1>
      <ListProduct products={products} />
    </main>
  );
};

export default Page;
