import ListOrders from "./ListOrders";

const page = () => {
  return (
    <section className="flex flex-col space-y-4">
      <h1 className="text-3xl font-semibold">Заказы</h1>
      <ListOrders />
    </section>
  );
};

export default page;
