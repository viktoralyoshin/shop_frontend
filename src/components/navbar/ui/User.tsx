"use client";

import { useAuthStore } from "@/stores/use-auth-store";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogOut, User2 } from "lucide-react";
import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useProfile } from "@/hooks/use-profile";

const User = () => {
  const data = useProfile();
  const setUser = useAuthStore((state) => state.setUser);
  const setAuthentication = useAuthStore((state) => state.setAuthentication);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      setUser({});
      setAuthentication(false);
      push("/signin");
    },
  });

  const logOut = () => {
    mutate();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-4 rounded-lg cursor-pointer">
          <Avatar>
            <AvatarFallback>{data?.user.firstName.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="md:flex hidden">
            {data?.user.firstName} {data?.user.lastName}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{data?.user.firstName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/profile" className="flex items-center gap-2">
            <User2 /> Профиль
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="flex items-center gap-2" onClick={logOut}>
            <LogOut /> Выход
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
