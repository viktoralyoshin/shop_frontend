import { Skeleton } from "../ui/skeleton";

const SkeletonUser = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="h-4 w-[70px]" />
    </div>
  );
};

export default SkeletonUser;
