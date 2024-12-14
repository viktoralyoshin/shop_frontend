"use client";

import { useProfile } from "@/hooks/use-profile";
import User from "./User";
import OrderContent from "@/components/order/OrderContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  const data = useProfile();

  return (
    <section className="space-y-4">
      <h1 className="font-semibold text-3xl">Профиль</h1>
      {data?.user && <User user={data.user} />}
      {data?.statistics &&
        data.statistics.map((statistic) => (
          <div
            key={statistic.label}
            className="flex p-4 flex-col rounded-xl border items-center justify-center"
          >
            <p>{statistic.value}</p>
            <p className="text-muted-foreground">{statistic.label}</p>
          </div>
        ))}
      <Accordion type="single" collapsible className="w-full">
        {data?.user.orders?.map((order) => (
          <AccordionItem key={order.id} value={order.id}>
            <AccordionTrigger>{order.id}</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <OrderContent products={order.products} price={order.price}/>
              <p className="text-md">Дата оформления: {new Intl.DateTimeFormat("ru").format(new Date(order.createdAt))}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default page;
