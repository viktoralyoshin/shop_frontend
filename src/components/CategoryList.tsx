import { ICategory } from "@/types/category.types";
import Link from "next/link";
import Icon from "./Icon";

const CategoryList = async () => {

  return (
    <div className="flex flex-col space-y-4">
      {categories.map((category: ICategory) => (
        <Link
          href={`/category/${category.id}`}
          className="flex gap-2 items-center"
          key={category.id}
        >
          <Icon name={category.pictureName} size={20} color="#7c3aed"></Icon>
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
