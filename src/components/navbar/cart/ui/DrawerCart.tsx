"use client";

import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Drawer,
} from "@/components/ui/drawer";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import CartList from "@/components/products/cart-wishlist/CartList";
import { IProduct } from "@/types/product.types";
import { Separator } from "@/components/ui/separator";

const DrawerCart = ({ products }: { products: IProduct[] }) => {
  const [open, setOpen] = useState(false);

  let totalPrice: number = 0;

  products.forEach((product) => {
    totalPrice += product.price;
  });

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingBag />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Корзина</DrawerTitle>
          <DrawerDescription>Товары для оформления заказа</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col space-y-4 w-full justify-center">
          <CartList products={products} />
          <Separator className="mx-4"/>
          <p className="mx-4">
            Итоговая стоимость:
            {" " +
              new Intl.NumberFormat("ru", {
                style: "currency",
                currency: "RUB",
              }).format(totalPrice)}
          </p>
        </div>
        <DrawerFooter className="pt-2">
          <Button>
            <ShoppingCart /> Оформить заказ
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCart;
