"use client";

import { ICategory } from "@/types/category.types";
import Link from "next/link";
import Icon from "./Icon";
import { useCategories } from "@/hooks/use-categories";

const CategoryList = () => {
  const data = useCategories();

  return (
    <div className="flex flex-col space-y-4">
      {data?.map((category: ICategory) => (
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
