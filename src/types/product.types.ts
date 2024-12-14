import { ICategory } from "./category.types";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  quantity: number;
  category: ICategory;
  pictureUrl: string;
}
