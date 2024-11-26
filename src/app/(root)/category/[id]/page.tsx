import ListProduct from "@/components/products/list-product/ListProduct";

const Page = async ({ params }: any) => {
  const { id } = await params;

  const categoryData = await fetch(`http://localhost:5000/api/category/${id}`);

  const category = await categoryData.json();

  const data = await fetch(`http://localhost:5000/api/product/category/${id}`);

  const products = await data.json();

  return (
    <div className="space-y-4">
      <h1 className="font-semibold text-[24px]">{category.name}</h1>
      <ListProduct products={products} />
    </div>
  );
};

export default Page;
