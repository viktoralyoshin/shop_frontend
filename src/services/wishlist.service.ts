import { axiosWithAuth } from "@/api/interceptors";
import { IWishlist, TypeWishlistResponse } from "@/types/wishlist.types";

class WishlistService {
  private BASE_URL = "/wishlist";

  async getWishlistById() {
    const response = await axiosWithAuth.get<IWishlist>(`${this.BASE_URL}`);
    return response.data;
  }

  async addProduct(id: number) {
    const response = await axiosWithAuth.post<TypeWishlistResponse>(
      `${this.BASE_URL}/add/${id}`
    );
    return response.data;
  }

  async deleteProduct(id: number) {
    const response = await axiosWithAuth.post<TypeWishlistResponse>(
      `${this.BASE_URL}/delete/${id}`
    );
    return response.data;
  }

  async addProductToBucket(id: number) {
    const response = await axiosWithAuth.post<TypeWishlistResponse>(
      `${this.BASE_URL}/add-to-bucket/${id}`
    );
    return response.data
  }
}

export const wishlistService = new WishlistService();
