"use client";

import { routes } from "@/constants/routes";
import Link from "next/link";
import Icon from "./Icon";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section className="fixed w-[250px] left-0 top-0 h-screen border-r">
      <div className="flex flex-col space-y-2 mx-2">
        <div className="flex items-center gap-4 my-4">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={48} height={48} />
          </Link>
        </div>
        {routes.map((route) => {
          const isActive =
            (pathname.includes(route.link) && route.link.length > 1) ||
            pathname === route.link;

          return (
            <Link
              href={route.link}
              key={route.label}
              className={`${isActive ? "bg-primary text-white" : "hover:bg-foreground/5"} flex gap-2 items-center p-2 px-3 rounded-lg ease-in-out duration-200`}
            >
              <Icon name={route.icon} size={16} /> {route.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
