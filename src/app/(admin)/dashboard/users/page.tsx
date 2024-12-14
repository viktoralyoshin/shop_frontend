import ListUsers from "./ListUsers";

const page = () => {
  return (
    <section className="flex flex-col space-y-4">
      <h1 className="text-3xl font-semibold">Пользователи</h1>
      <ListUsers />
    </section>
  );
};

export default page;
