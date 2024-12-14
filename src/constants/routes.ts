export type TypeRoute = {
  label: string;
  icon: any;
  link: string;
};

export const routes: TypeRoute[] = [
  {
    label: "Панель управления",
    icon: "LayoutDashboard",
    link: "/dashboard/home",
  },
  {
    label: "Пользователи",
    icon: "Users",
    link: "/dashboard/users",
  },
  {
    label: "Товары",
    icon: "Package",
    link: "/dashboard/products",
  },
  {
    label: "Заказы",
    icon: "ShoppingBag",
    link: "/dashboard/orders",
  },
];
