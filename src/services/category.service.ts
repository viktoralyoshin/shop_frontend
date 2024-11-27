import { axiosClassic, axiosWithAuth } from "@/api/interceptors";
import { ICategory } from "@/types/category.types";
import { IProduct } from "@/types/product.types";

class CategoryService {
  private BASE_URL = "/category";

  async getCategories() {
    const response = await axiosClassic.get<ICategory[]>(this.BASE_URL);
    return response.data;
  }

  async getCategoryById(id: number) {
    const response = await axiosClassic.get<ICategory>(
      `${this.BASE_URL}/${id}`
    );
    return response.data;
  }

  async createCategory() {
    const response = await axiosWithAuth.post<ICategory>(this.BASE_URL);
    return response.data;
  }

  async deleteCategory(id: number) {
    const response = await axiosWithAuth.post<IProduct>(
      `${this.BASE_URL}/${id}`
    );
    return response.data;
  }
}

export const categoryService = new CategoryService();
