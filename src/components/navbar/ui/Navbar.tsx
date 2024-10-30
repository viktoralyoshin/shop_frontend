import Image from "next/image";
import Menu from "../Menu";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center py-4 justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <Menu />
        </div>
        <Button className="font-medium flex items-center">
          <LogIn /> Войти
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
