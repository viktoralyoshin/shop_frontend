import { axiosWithAuth } from "@/api/interceptors";
import { IUser, IUserResponse } from "@/types/user.types";

export interface IProfileResponse {
  user: IUser;
  statistics: {
    label: string;
    value: string;
  }[];
}

class UserService {
  private BASE_URL = "/user";

  async getProfile() {
    const response = await axiosWithAuth.get<IProfileResponse>(
      `${this.BASE_URL}/profile`
    );
    return response.data;
  }

  async getUsers() {
    const response = await axiosWithAuth.get<IUserResponse[]>(this.BASE_URL);
    return response.data;
  }

  async getUser(id: string) {
    const response = await axiosWithAuth.get<IUser>(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const userService = new UserService();
