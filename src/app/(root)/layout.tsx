import CategoryList from "@/components/CategoryList";
import Navbar from "@/components/navbar/Navbar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="mx-4 space-y-10">
      <Navbar />
      <section className="space-y-6">
        <h1 className="font-semibold text-[24px]">Категории</h1>
        <CategoryList />
      </section>
      <main className="flex flex-col gap-10 max-w-6xl mx-auto">{children}</main>
    </div>
  );
};

export default HomeLayout;
