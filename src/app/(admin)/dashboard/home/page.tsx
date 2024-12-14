import ListStatistic from "./ListStatistic";

const page = () => {
  return (
    <section className="flex flex-col space-y-4">
      <h1 className="text-3xl font-semibold">Панель управления</h1>
      <ListStatistic />
    </section>
  );
};

export default page;
