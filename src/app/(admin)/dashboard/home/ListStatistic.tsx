"use client";

import StatisticCard from "@/components/dashboard/StatisticCard";
import { useCategories } from "@/hooks/use-categories";
import { useOrders } from "@/hooks/use-orders";
import { useProducts } from "@/hooks/use-products";
import { useUsers } from "@/hooks/use-users";

const ListStatistic = () => {
  const categories = useCategories();
  const products = useProducts();
  const users = useUsers()
  const orders = useOrders()

  return (
    <div className="flex items-center space-x-4">
      <StatisticCard title="Категории" value={categories?.length} />
      <StatisticCard title="Товары" value={products?.length} />
      <StatisticCard title="Пользователи" value={users?.length} />
      <StatisticCard title="Заказы" value={orders?.length} />
    </div>
  );
};

export default ListStatistic;
