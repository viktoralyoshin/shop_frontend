import ListWishlist from "./ListWishlist";

const page = () => {
  return (
    <section className="flex flex-col space-y-4">
      <h1 className="text-3xl font-semibold">Избранное</h1>
      <ListWishlist />
    </section>
  );
};

export default page;
