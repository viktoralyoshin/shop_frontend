"use client";
import useMediaQuery from "@/hooks/use-media-query";
import { IProduct } from "@/types/product.types";
import DialogCart from "./ui/DialogCart";
import DrawerCart from "./ui/DrawerCart";
import UserService from '@/app/services/user.service';

type Props = {
  products: IProduct[];
};

const CartMedia = (props: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <DialogCart products={props.products} />;
  }

  return <DrawerCart products={props.products}/>;
};

export default CartMedia;
