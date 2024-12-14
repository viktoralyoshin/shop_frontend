import { axiosClassic, axiosWithAuth } from "@/api/interceptors";
import { IProduct } from "@/types/product.types";

export type TypeProductResponse = Omit<IProduct, "category">;

class ProductService {
  private BASE_URL = "/product";

  async getProducts() {
    const response = await axiosClassic.get<IProduct[]>(this.BASE_URL);
    return response.data;
  }

  async getProductsByCategory(id: number) {
    const response = await axiosClassic.get<IProduct[]>(
      `${this.BASE_URL}/category/${id}`
    );
    return response.data;
  }

  async getProductById(id: number) {
    const response = await axiosClassic.get<IProduct>(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async createProduct(data: any) {
    const response = await axiosWithAuth.post<TypeProductResponse>(
      this.BASE_URL,
      data
    );
    return response.data;
  }

  async deleteProduct(id: number) {
    const response = await axiosWithAuth.post<TypeProductResponse>(
      `${this.BASE_URL}/${id}`
    );
    return response.data;
  }
}

export const productService = new ProductService();
