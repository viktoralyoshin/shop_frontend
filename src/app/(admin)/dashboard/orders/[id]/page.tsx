"use client";

import { useOrder } from "@/hooks/use-order";
import { useParams } from "next/navigation";
import User from "./User";
import OrderContent from "@/components/order/OrderContent";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();

  const data = useOrder(id);

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/orders" className="flex items-center gap-2 hover:bg-muted p-2 rounded-md ease-in-out duration-200"><ArrowLeftIcon size={18}/> Заказы</Link>
        <h1 className="font-semibold text-[24px]">{data?.id}</h1>
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold text-[18px]">Пользователь</h2>
        {data?.userId && <User userId={data.userId} />}
      </div>
      {data?.products && <OrderContent products={data.products} price={data.price}/>}
    </section>
  );
};

export default Page;
