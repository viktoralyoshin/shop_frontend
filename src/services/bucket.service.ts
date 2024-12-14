import { axiosWithAuth } from "@/api/interceptors";
import { IBucket, TypeBucketResponse } from "@/types/bucket.types";

class BucketService {
  private BASE_URL = "/bucket";

  async getBucketById() {
    const response = await axiosWithAuth.get<IBucket>(`${this.BASE_URL}`);
    return response.data;
  }

  async addProduct(id: number) {
    const response = await axiosWithAuth.post<TypeBucketResponse>(`${this.BASE_URL}/add/${id}`);
    return response.data;
  }

  async deleteProduct(id: number) {
    const response = await axiosWithAuth.post<TypeBucketResponse>(`${this.BASE_URL}/delete/${id}`);
    return response.data;
  }
}

export const bucketService = new BucketService();
