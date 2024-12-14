"use client";

import { Button } from "@/components/ui/button";
import { useBucket } from "@/hooks/use-bucket";
import { orderService } from "@/services/order.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const CreateOrder = () => {
  const QueryClient = useQueryClient();

  const data = useBucket();

  const { mutate } = useMutation({
    mutationKey: ["createOrder"],
    mutationFn: () => orderService.createOrder(),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["getBucket"],
      });
      QueryClient.invalidateQueries({ queryKey: ["getOrders"] });
      toast("Заказ оформлен");
    },
  });

  async function onSubmit() {
    if (!data) return;

    if (data.products.length > 0) {
      mutate();
    } else {
      toast("Корзина пустая");
    }
  }

  return (
    <Button onClick={onSubmit}>
      <ShoppingCart /> Оформить заказ
    </Button>
  );
};

export default CreateOrder;
