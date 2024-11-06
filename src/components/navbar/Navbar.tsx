// "use client";

import Image from "next/image";
import Menu from "./ui/Menu";
import User from "./ui/User";
import { Suspense, useState } from "react";
import SkeletonUser from "../skeletons/SkeletonUser";
import { Heart, LogIn, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Navbar = () => {
  // const [isAuth, setAuth] = useState(true);
  const isAuth = false;

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center py-4 justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <Menu />
        </div>
        {isAuth ? (
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ShoppingBag />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Корзина</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Heart />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Избранное</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Suspense fallback={<SkeletonUser />}>
              <User />
            </Suspense>
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
