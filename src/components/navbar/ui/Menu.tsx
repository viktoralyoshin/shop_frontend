'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Icon from "../../Icon";
import { useCategories } from "@/hooks/use-categories";

const Menu = () => {

  const data = useCategories()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-6 flex flex-col items-start gap-4">
              {data?.map((category) => (
                <Link href={`/category/${category.id}`} className="flex gap-2 items-center" key={category.id}>
                  <Icon name={category.pictureName} size={20} color="#7c3aed"></Icon>
                  <p>{category.name}</p>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
