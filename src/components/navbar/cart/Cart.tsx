"use client";

import useMediaQuery from "@/hooks/use-media-query";
import DialogCart from "./ui/DialogCart";
import DrawerCart from "./ui/DrawerCart";
import { useBucket } from "@/hooks/use-bucket";

const Cart = () => {
  const data = useBucket();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (data) {
    if (isDesktop) {
      return <DialogCart products={data.products} />;
    }

    return <DrawerCart products={data.products} />;
  }
};

export default Cart;
