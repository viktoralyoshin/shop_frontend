import { IOrder } from "./order.types";

export enum EnumUserRole {
  user = "USER",
  admin = "ADMIN",
}

export interface IUserResponse {
  id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface IUser {
  id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  role: EnumUserRole;
  createdAt: string;
  orders?: IOrder[];
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}
