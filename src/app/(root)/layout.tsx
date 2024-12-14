import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Separator } from "@/components/ui/separator";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="mx-4 space-y-10">
      <Navbar />
      <section className="max-w-6xl mx-auto space-y-6">
        <h1 className="font-semibold text-[24px]">Категории</h1>
        <CategoryList />
      </section>
      <main className="flex flex-col gap-10 max-w-6xl mx-auto mb-10">
        {children}
      </main>
      <Separator />
      <Footer />
    </div>
  );
};

export default HomeLayout;
