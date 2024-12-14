import SideBar from "../../components/SideBar";
const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <SideBar />
      <section className="ml-[266px] mt-4">{children}</section>
    </main>
  );
};

export default DashboardLayout;
