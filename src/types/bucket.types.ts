import { IProduct } from "./product.types";

export interface IBucket {
  id: number;
  userId: string;
  products: IProduct[];
}

export type TypeBucketResponse = Omit<IBucket, 'products'>