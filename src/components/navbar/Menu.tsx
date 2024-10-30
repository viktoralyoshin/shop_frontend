import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Icon from "../Icon";

interface InterfaceCategory {
  id: number;
  name: string;
  pictureName: any;
}

const Menu = async () => {
  const data = await fetch("http://localhost:5000/api/category");

  const categories: InterfaceCategory[] = await data.json();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Категории</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-6 flex flex-col items-start gap-4">
              {categories.map((category: InterfaceCategory) => (
                <Link href="/" className="flex gap-2 items-center">
                  <Icon name={category.pictureName} size={20} color="red"></Icon>
                  <p className="font-medium">{category.name}</p>
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
