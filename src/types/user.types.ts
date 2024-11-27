import { IOrder } from "./order.types";

export enum EnumUserRole {
  user = "USER",
  admin = "ADMIN",
}

export interface IUser {
  id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  role: EnumUserRole;
  createdAt: Date;
  orders ?: IOrder[]
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}
