"use client";

import Image from "next/image";
import Menu from "./ui/Menu";
import User from "./ui/User";
import { Heart, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Cart from "./cart/Cart";
import { useAuthStore } from "@/stores/use-auth-store";
import { useProfile } from "@/hooks/use-profile";

const Navbar = () => {
  const isAuth = useAuthStore((state) => state.authenticated);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center py-4 justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={48} height={48} />
          </Link>
          <Menu />
        </div>
        {isAuth ? (
          <div className="flex items-center gap-4">
            <Cart />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon">
                    <Link href="/wishlist">
                      <Heart />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Избранное</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <User />
          </div>
        ) : (
          <Button asChild className="font-medium flex items-center">
            <Link href="/signin">
              <LogIn /> Войти
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
