import { IProduct } from "./product.types";

export interface IWishlist {
  id: number;
  userId: string;
  products: IProduct[];
}

export type TypeWishlistResponse = Omit<IWishlist, 'products'>