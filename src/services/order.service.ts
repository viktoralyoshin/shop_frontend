import { IOrder } from "./../types/order.types";
import { axiosWithAuth } from "@/api/interceptors";

class OrderService {
  private BASE_URL = "/order";

  async createOrder() {
    const response = await axiosWithAuth.post<IOrder>(this.BASE_URL);
    return response.data;
  }

  async getOrders() {
    const response = await axiosWithAuth.get<IOrder[]>(this.BASE_URL);
    return response.data;
  }

  async getOrder(id: string) {
    const response = await axiosWithAuth.get<IOrder>(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const orderService = new OrderService();
