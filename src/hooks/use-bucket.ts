import { bucketService } from "@/services/bucket.service";
import { useQuery } from "@tanstack/react-query";

export const useBucket = () => {
  const { data } = useQuery({
    queryKey: ["getBucket"],
    queryFn: () => bucketService.getBucketById(),
  });

  return data;
};
