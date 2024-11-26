import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, ShoppingBag, User2 } from "lucide-react";
import UserService from '@/app/services/user.service';

const User = async () => {

  const user = await UserService.checkAuth();
  console.log(user)

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-4 rounded-lg cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>В</AvatarFallback>
          </Avatar>
          <p className="font-semibold md:flex hidden">{user.firstName}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.firstName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User2 /> Профиль
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShoppingBag /> Заказы
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings /> Настройки
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut /> Выход
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
