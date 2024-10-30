import Navbar from "@/components/navbar/ui/Navbar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10">{children}</main>
    </>
  );
};

export default HomeLayout;
