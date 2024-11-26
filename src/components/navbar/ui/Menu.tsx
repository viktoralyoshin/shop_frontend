import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Icon from "../../Icon";
import { ICategory } from "@/types/category.types";

const Menu = async () => {
  const data = await fetch("http://localhost:5000/api/category");

  const categories: ICategory[] = await data.json();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-6 flex flex-col items-start gap-4">
              {categories.map((category: ICategory) => (
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
