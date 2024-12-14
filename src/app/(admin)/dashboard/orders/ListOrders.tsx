"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useOrders } from "@/hooks/use-orders";
import Link from "next/link";

const ListOrders = () => {
  const data = useOrders();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Номер заказа</TableHead>
          <TableHead>Стоимость</TableHead>
          <TableHead className="text-right">Дата создания</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <Link className="hover:text-primary ease-in-out duration-200" href={`/dashboard/orders/${order.id}`}> {order.id}</Link>
            </TableCell>
            <TableCell>
              {new Intl.NumberFormat("ru", {
                style: "currency",
                currency: "RUB",
              }).format(order.price)}
            </TableCell>
            <TableCell className="text-right">
              {new Intl.DateTimeFormat("ru").format(new Date(order.createdAt))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListOrders;
