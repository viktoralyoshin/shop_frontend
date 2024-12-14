import { IProduct } from "./product.types";

export interface IOrder {
  id: string;
  price: number;
  products: IProduct[];
  createdAt: string;
  userId: string;
}
