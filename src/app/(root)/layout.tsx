import Navbar from "@/components/navbar/Navbar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="mx-2">
      <Navbar />
      <main className="flex flex-col gap-10">{children}</main>
    </div>
  );
};

export default HomeLayout;
