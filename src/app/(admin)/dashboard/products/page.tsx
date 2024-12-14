import CategoryList from "@/components/CategoryList";
import CreateCategory from "./CreateCategory";
import CreateProduct from "./CreateProduct";
import ListProducts from "./ListProducts";

const page = () => {
  return (
    <section className="flex flex-col space-y-4">
      <h1 className="text-3xl font-semibold">Категории</h1>
      <CreateCategory />
      <CategoryList />
      <h1 className="text-3xl font-semibold">Товары</h1>
      <CreateProduct />
      <ListProducts />
    </section>
  );
};

export default page;
