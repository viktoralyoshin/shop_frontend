"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CartList from "@/components/products/cart-wishlist/CartList";
import { IProduct } from "@/types/product.types";
import { Separator } from "@/components/ui/separator";
import CreateOrder from "./CreateOrder";

const DialogCart = ({ products }: { products: IProduct[] }) => {
  const [open, setOpen] = useState(false);

  let totalPrice: number = 0;

  products.forEach((product) => {
    totalPrice += product.price;
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <ShoppingBag />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Корзина</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Корзина</DialogTitle>
          <DialogDescription>Товары для оформления заказа</DialogDescription>
        </DialogHeader>
        <CartList products={products} />
        <Separator />
        <p>
          Итоговая стоимость:
          {" " +
            new Intl.NumberFormat("ru", {
              style: "currency",
              currency: "RUB",
            }).format(totalPrice)}
        </p>
        <DialogFooter>
          <CreateOrder />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCart;
